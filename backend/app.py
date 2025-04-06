from flask import Flask, request, jsonify, redirect, session, url_for
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from requests_oauthlib import OAuth2Session
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import timedelta
import os
import uuid
from flask_socketio import SocketIO
from flask_cors import CORS
from dotenv import load_dotenv


os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

app = Flask(__name__)

FRONTEND_URL = "https://f-sync-sigma.vercel.app"

CORS(app, supports_credentials=True, resources={r"/*": {"origins": FRONTEND_URL}})
socketio = SocketIO(app, cors_allowed_origins=FRONTEND_URL)
app.secret_key = "HelloWorld"
app.config["SESSION_PERMANENT"] = True
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(minutes=15)

load_dotenv()

firebase_config = {
    "type": os.getenv("FIREBASE_TYPE"),
    "project_id": os.getenv("FIREBASE_PROJECT_ID"),
    "private_key_id": os.getenv("FIREBASE_PRIVATE_KEY_ID"),
    "private_key": os.getenv("FIREBASE_PRIVATE_KEY").replace('\\n', '\n'),
    "client_email": os.getenv("FIREBASE_CLIENT_EMAIL"),
    "client_id": os.getenv("FIREBASE_CLIENT_ID"),
    "auth_uri": os.getenv("FIREBASE_AUTH_URI"),
    "token_uri": os.getenv("FIREBASE_TOKEN_URI"),
    "auth_provider_x509_cert_url": os.getenv("FIREBASE_AUTH_PROVIDER_CERT_URL"),
    "client_x509_cert_url": os.getenv("FIREBASE_CLIENT_CERT_URL"),
    "universe_domain": os.getenv("FIREBASE_UNIVERSE_DOMAIN")
}


# Initialize Firebase
cred = credentials.Certificate(firebase_config)
firebase_admin.initialize_app(cred)
db = firestore.client()  # 🔥 Firestore client

bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = "login"

# Google OAuth Config
GOOGLE_CLIENT_ID = "243710071516-ukb86ego33ed3ed2rthcjjqv0rblp090.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET = "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"
REDIRECT_URI = "http://localhost:5000/auth/callback"
AUTHORIZATION_BASE_URL = "https://accounts.google.com/o/oauth2/auth"
TOKEN_URL = "https://oauth2.googleapis.com/token"
USER_INFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo"




# Load user function (fetching from Firestore)
@login_manager.user_loader
def load_user(user_id):
    user_doc = db.collection("users").document(user_id).get()
    if user_doc.exists:
        return User(user_id=user_id, **user_doc.to_dict())  # Return user object
    return None

# Custom User Class
class User(UserMixin):
    def __init__(self, user_id, name, email, google_id=None, password=None):
        self.id = user_id
        self.name = name
        self.email = email
        self.google_id = google_id
        self.password = password

@app.route("/")
def index():
    print("Session Data:", session)  #  Debugging line
    loguser = session.get("user")
    if loguser:
        return redirect("http://localhost:5173/home")
    else:
        return redirect("http://localhost:5173/logpage")  # Fix infinite loop issue


        

# **Google OAuth Login**
@app.route("/login/google")
def google_login():
    google = OAuth2Session(GOOGLE_CLIENT_ID, redirect_uri=REDIRECT_URI, scope=["email", "profile"])
    authorization_url, state = google.authorization_url(AUTHORIZATION_BASE_URL, access_type="offline", prompt="consent")
    session["oauth_state"] = state
    return redirect(authorization_url)

# **Google OAuth Callback & User Registration in Firestore**
@app.route("/auth/callback")
def google_callback():
    google = OAuth2Session(GOOGLE_CLIENT_ID, redirect_uri=REDIRECT_URI, state=session["oauth_state"])
    token = google.fetch_token(TOKEN_URL, client_secret=GOOGLE_CLIENT_SECRET, authorization_response=request.url)

    session["oauth_token"] = token  # Store OAuth token in session
    user_info = google.get(USER_INFO_URL).json()

    email = user_info["email"]
    google_id = user_info["id"]

    # Check if the user exists
    user_query = db.collection("users").where("email", "==", email).stream()
    user_data = next(user_query, None)

    user_dict = user_data.to_dict()

    if user_data:
        user_id = user_data.id  # Existing user's UUID
    else:
        # Create a new user with a UUID
        user_id = str(uuid.uuid4())
        user_ref = db.collection("users").document(user_id)
        user_ref.set({
            "name": user_info["name"],
            "email": email,
            "google_id": google_id,
            "user_id": user_id  # Store UUID for consistency
        })

    # Store user in session
    session["user"] = user_id  # Store UUID instead of Google ID
    session["username"] = user_dict["name"]
    session["usermail"] = user_dict["email"]

    return redirect("http://localhost:5173/home")

@app.route('/create_community', methods=['POST'])
def create_community():
    try:
        data = request.json  
        print("Received Data:", data)  # Debugging step

        current_user = session.get("user")
        if not current_user:
            return jsonify({"error": "User not logged in"}), 401
        
        community_id = str(uuid.uuid4())

        community_data = {
            "name": data.get("name"),
            "type": data.get("type"),
            "topic": data.get("topic"), 
            "description": data.get("description"),
            "createdAt": firestore.SERVER_TIMESTAMP,
            "creator": current_user,
            "community_id": community_id,
        }

        user_ref = db.collection('users').document(current_user)

        user_ref.update({"hostcommunity": firestore.ArrayUnion([community_id])  
})

        community_ref= db.collection('HostCommunities').add(community_data)

        return jsonify({"message": "Community created successfully!"}), 201

    except Exception as e:
        print("Error:", str(e))  
        return jsonify({"error": str(e)}), 500


#  **Manual User Signup with UUID**


@app.route("/register", methods=["POST"])
def register():
    name = request.form.get("username")
    email = request.form.get("email")
    password = request.form.get("password")

    if not name or not email or not password:
        return jsonify({"error": "All fields are required"}), 400

    # Check if user exists
    user_query = db.collection("users").where("email", "==", email).stream()
    if any(user_query):
        return jsonify({"error": "Email already registered"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
    user_id = str(uuid.uuid4())  # 🔥 Generate unique UUID

    # Save user to Firestore
    db.collection("users").document(user_id).set({
        "user_id": user_id,  
        "name": name,
        "email": email,
        "password": hashed_password,
        "google_id": None
    })

    return redirect("http://localhost:5173/logpage")

#  **Manual User Login**
@app.route("/login", methods=["POST"])
def login():

    
    data = request.get_json()
    email = data.get("mail")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "All fields are required"}), 400

    # Find user by email
    user_query = db.collection("users").where("email", "==", email).stream()
    user_data = next(user_query, None)

    if not user_data:
        return jsonify({"error": "User not found"}), 404

    user_dict = user_data.to_dict()
    loggedUser = user_dict.get("name")
    loggedMail = user_dict.get("email")

    if not bcrypt.check_password_hash(user_dict["password"], password):
        return jsonify({"error": "Invalid credentials"}), 401

    session["user"] = user_dict["user_id"] 
    session["username"] = loggedUser
    session["usermail"] = loggedMail
    session.modified = True 
    session.permanent = True
    print(session)
    print(session["username"])
    socketio.emit("user_logged_in", {"user_name": loggedUser, "email": loggedMail})



    # code for community fetching

    if "user" in session:
        user_id = session["user"]
        print("UserID:", user_id)

        # Fetch user document
        user_query = db.collection("users").where("user_id", "==", user_id).stream()
        user_data = next(user_query, None)

        if not user_data:
            print("User not found.")
            return jsonify({"error": "User not found"}), 404
        
        user_dict = user_data.to_dict()
        hosted_community_ids = user_dict.get("hostcommunity", [])

        hosted_communities = {}

        if hosted_community_ids:
            # Fetch all matching hosted communities
            community_query = db.collection("HostCommunities").where("community_id", "in", hosted_community_ids).stream()

            for doc in community_query:
                hosted_communities[doc.id] = doc.to_dict()  # Store each community in dictionary
            

            # Store all fetched communities in session
            session["hCommunities"] = hosted_communities

            
    
    else:
        print("User not logged in")
        return jsonify({"error": "User not logged in"}), 401
    

    
    return jsonify({"message": "Login successful", "status": True})


#  **Fetch User Data from Firestore**
@app.route("/dashboard")
def dashboard():
    if "user" not in session:
        return jsonify({"message": "Unauthorized"}), 401

    user_id = session["user"]
    user_doc = db.collection("users").document(user_id).get()

    if not user_doc.exists():
        return jsonify({"message": "User not found"}), 404

    user_data = user_doc.to_dict()
    return jsonify({"message": f"Welcome {user_data['name']}!", "email": user_data["email"], "user_id": user_id})

#get user
@app.route("/get-user")
def getUser():
    

    if "user" in session:
        print("Session content:", session)
        username = session["username"]
        usermail = session["usermail"]
        print(username)
        user_id = session['user']
        print("User ID in session:", user_id) 
        return jsonify({"message": "user_found", "user_name": username, "user_mail": usermail}), 200
            
    else:
        print("User not logged in")  
        return jsonify({"message": "user_not_logged_in"})

# testing new routes

@app.route("/testgetdata")       
def testget():
    if "user" in session:
        hosted_communities = session["hCommunities"]

        return hosted_communities

    else:
        return "User not logged in", 500

#  **Logout**
@app.route("/logout")
def logout():
    session.clear()
    return jsonify({"message": "Logged out successfully"})

if __name__ == "__main__":
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)

