import './styles/pagestyles/logpage.css';
import BackgroundImage from './assets/Images/Background.jpg';
import logo from './assets/Images/logo.png';
import google from './assets/Images/Google.png';

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'; // Import Firebase auth functions

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpRPJ57gDZL7-Ge_ahjxM8CO0Y9zqNEC0",
    authDomain: "fellowsync.firebaseapp.com",
    projectId: "fellowsync",
    storageBucket: "fellowsync.firebasestorage.app",
    messagingSenderId: "1031152915514",
    appId: "1:1031152915514:web:610a821da651bff3039103",
    measurementId: "G-VZF1JS3PVS"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Google Provider
const googleProvider = new GoogleAuthProvider();

function LogPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    function Focus(e) {
        e.target.parentElement.querySelector('label').style.transform = 'translateY(-165%)';
    }

    function Notfocus(e) {
        if (!e.target.value) {
            e.target.parentElement.querySelector('label').style.transform = 'translateY(-50%)';
        }
    }

    const [isSignUp, setIsSignUp] = useState(true);

    function MoveToSignIn() {
        setIsSignUp(false);
        document.querySelector('.signupbtn').classList.remove('active');
        document.querySelector('.loginbtn').classList.add('active');
    }

    function MoveToSignUp() {
        setIsSignUp(true);
        document.querySelector('.signupbtn').classList.add('active');
        document.querySelector('.loginbtn').classList.remove('active');
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await auth.currentUser.updateProfile({
                displayName: username,
            });
            console.log('User signed up successfully!');
        } catch (error) {
            console.error('Error signing up:', error);
            alert(error.message);
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in successfully!');
        } catch (error) {
            console.error('Error signing in:', error);
            alert(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log('User signed in with Google successfully!');
        } catch (error) {
            console.error('Error signing in with Google:', error);
            alert(error.message);
        }
    };

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="navbuttons">
                    <button className="loginbtn pcbtn" onClick={MoveToSignIn}>
                        Sign In
                    </button>
                    <button className='signupbtn pcbtn active' onClick={MoveToSignUp}>
                        Sign Up
                    </button>
                    <button className="about">
                        About us
                    </button>
                </div>

            </div>

            <div className="logarea">
                <div className="imgarea">
                    <img src={BackgroundImage} alt="" />
                </div>

                <div className="formarea">

                    <h1>Fellow<span>Sync</span></h1>

                    <div className="desarea">
                        <h3>Welcome!</h3>
                        <p>Get Started! Start Your Journey with People Who Share Your Passion.</p>
                    </div>

                    <div className={`formbox ${isSignUp ? 'MoveToSignUp' : 'MoveToSignIn'}`}>

                        <div className="signupform form">
                            <h2>Sign Up</h2>
                            <form onSubmit={handleSignUp}>
                                <div className="nameArea inputarea">
                                    <label>Username</label>
                                    <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} onFocus={Focus} onBlur={Notfocus} required />
                                </div>
                                <div className="mailArea inputarea">
                                    <label>EMail</label>
                                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} onFocus={Focus} onBlur={Notfocus} required />
                                </div>
                                <div className="passwordArea inputarea">
                                    <label>Password</label>
                                    <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} onFocus={Focus} onBlur={Notfocus} required />
                                </div>

                                <div className="buttonarea">
                                    <input type="submit" value="Register" />
                                    <div className="continueggl" onClick={handleGoogleSignIn}>
                                        <img src={google} alt="" />
                                    </div>
                                </div>

                                <p>Already have an account? <a href="#" onClick={MoveToSignIn}>Sign In</a></p>
                            </form>
                        </div>

                        <div className="signinform form">
                            <h2>Sign In</h2>
                            <form onSubmit={handleSignIn}>
                                <div className="mailArea inputarea">
                                    <label>EMail</label>
                                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} onFocus={Focus} onBlur={Notfocus} required />
                                </div>
                                <div className="passwordArea inputarea">
                                    <label>Password</label>
                                    <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} onFocus={Focus} onBlur={Notfocus} required />
                                </div>

                                <div className="buttonarea">
                                    <input type="submit" value="Log in" />
                                    <div className="continueggl" onClick={handleGoogleSignIn}>
                                        <img src={google} alt="" />
                                    </div>
                                </div>

                                <p>Don't have an account? <a href="#" onClick={MoveToSignUp}>Sign Up</a></p>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

export default LogPage;
