import '../styles/pagestyles/logpage.css';
import BackgroundImage from '../assets/Images/Background.jpg';
import logo from '../assets/Images/Fsync.svg';
import google from '../assets/Images/Google.png'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Logpage() {

    const navigate = useNavigate();

    function Focus(e) {
        e.target.parentElement.querySelector('label').style.transform = 'translateY(-205%)';
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

    function handleGoogleLogin() {
        window.location.href = "http://localhost:5000/login/google";
    }

    
    const [mail,setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post(
                "http://localhost:5000/login",  
                {mail,password, 
                },
                {
                    headers: { "Content-Type": "application/json" }, 
                    withCredentials: true 
                }
            );
    
            console.log("Login Successful", response.data);

            if(response.status) {
                navigate('/home');
            }

        } catch (error) {
            console.log("Login failed:", error.response?.data || error.message);
        }
    };
    

    return(
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
                <button className="about" onClick={() => navigate("/")}>
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
                    <form action='http://localhost:5000/register' method='POST'>
                        <div className="nameArea inputarea">
                            <label>Username</label>
                            <input type="text" name='username' onFocus={Focus} onBlur={Notfocus} required />
                        </div>
                        <div className="mailArea inputarea">
                            <label>EMail</label>
                            <input type="email" name='email' onFocus={Focus} onBlur={Notfocus} required />
                        </div>
                        <div className="passwordArea inputarea">
                            <label>Password</label>
                            <input type="password" name='password' onFocus={Focus} onBlur={Notfocus} required />
                        </div>

                        <div className="buttonarea">
                        <input type="submit" value="Register" />
                        <div className="continueggl">
                            <img src={google} alt="" onClick={handleGoogleLogin}/>
                        </div>
                        </div>
                        
                        <p>Already have an account? <a href="#" onClick={MoveToSignIn}>Sign In</a></p>
                    </form>
                    </div>

                    <div className="signinform form">
                    <h2>Sign In</h2>
                    <form action='http://localhost:5000/login' method='POST' onSubmit={handleLogin}>
                        <div className="mailArea inputarea">
                            <label>EMail</label>
                            <input type="email" name='email' onFocus={Focus} onBlur={Notfocus} required onChange={(e) => setMail(e.target.value)}/>
                        </div>
                        <div className="passwordArea inputarea">
                            <label>Password</label>
                            <input type="password" name='password' onFocus={Focus} onBlur={Notfocus} required onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="buttonarea">
                        <input type="submit" value="Log in"/>
                        <div className="continueggl">
                            <img src={google} alt="" onClick={handleGoogleLogin}/>
                        </div>
                        </div>
                        
                        <p>Don't have an account? <a href="#" onClick={MoveToSignUp}>Sign Up</a></p>
                    </form>
                    </div>
                    
                    </div>
                
            </div>
        </div>

        </>
    )
}

export default Logpage
