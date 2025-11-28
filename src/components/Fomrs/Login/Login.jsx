import React, { useContext, useState } from 'react'
import "./login.css"
import logo from "../../../assets/Home/logo.png"
import { credentials } from "../../../Data/credentials"
import { ColorRing } from 'react-loader-spinner'
import { useLocation, useNavigate } from 'react-router-dom'
import UserContext from '../../../context/UserContext'

function Login() {

    const location=useLocation();
    const navigate=useNavigate();

    const {getEmail}=location.state;
    const [emailOrPhone, setEmailOrPhone] = useState(getEmail);
    const [password, setPassword] = useState("");

    const [isLoading, setLoading] = useState(false);
    const {setIsLogin}=useContext(UserContext);
    const [isWrongCredentials, setIsWrongCredentials] = useState(false);

    
    
    const handleEmailChange = (event) => {
        setEmailOrPhone(event.target.value);
        //   console.log(emailOrPhone)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    // useEffect(() => {

    // }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            if ((emailOrPhone === credentials.email || emailOrPhone === credentials.phoneNo) && password === credentials.password) {
                // console.log("Authentication done")
                localStorage.setItem("user",JSON.stringify(credentials));
                localStorage.setItem("isLogin","true");
                setIsLogin("true");
                navigate("/")

            } else {
                // console.log("wrong credentials")
                setEmailOrPhone("");
                setPassword("");
                setIsWrongCredentials(true)
            }

            setLoading(false)
        }, 2000)

    }
    
    const handleLogoClick = () => {
      navigate('/')
    }
    

    return (
        <>
            <div className='loginContainer'>
                <nav>
                    <img src={logo} alt="logo" className='h-16 cursor-pointer' onClick={handleLogoClick}/>
                </nav>
                <div class="form-wrapper">
                    <h2 >Sign In</h2>
                    <form>
                        {isWrongCredentials && <div className='bg-[#D89D31] p-2 px-3 text-justify rounded mb-4 '>
                            Sorry, we can't find an account with this email address. Please try again orcreate a new account.
                        </div>}
                        <div class="form-control">
                            <input type="text" value={emailOrPhone} onChange={handleEmailChange} required />
                            <label>Email or phone number</label>
                        </div>
                        <div class="form-control">
                            <input type="password" value={password} onChange={handlePasswordChange} required />
                            <label>Password</label>
                        </div>
                        <button type="submit" onClick={handleSubmit}>
                            {(isLoading) ?
                                <div className='flex justify-center items-center  pt-0 mt-[-15px]'>
                                    <ColorRing
                                        visible={true}
                                        height="45"
                                        width="45"
                                        ariaLabel="color-ring-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="color-ring-wrapper"
                                        colors={['rgb(105, 105, 105)', 'rgb(105, 106, 105)', 'rgb(105, 106, 107)']}
                                    />
                                </div>

                                : <>Sign In</>

                            }
                        </button>
                        <p className='text-white text-center m-0 p-0'>OR</p>
                        <button className='codeBtn' type="submit">Use a sign-in code</button>
                        <a className='forgot' href="" id='forgot'>Forgot password?</a>
                        <div class="form-help">
                            <div class="remember-me">
                                <input type="checkbox" id="remember-me" />
                                <label for="remember-me" style={{ color: "white", fontSize: "18px" }}>Remember me</label>
                            </div>
                            <a href="#">Need help?</a>
                        </div>
                    </form>
                    <p>New to Netflix? <a href="#">Sign up now</a></p>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <a href="#">Learn more.</a>
                    </small>
                </div>
            </div>


        </>
    )
}

export default Login
