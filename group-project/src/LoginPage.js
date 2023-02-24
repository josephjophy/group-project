import React, { useState } from "react";
import './LoginPage'; 
import backgroundImage from './road.jpg';

function LoginPage(){
    const [display,setDisplay]=useState(false)
    const [show,setShow]=useState(false)
    const handleShow=()=>
    {
      setShow(!show)
    }
return(
    <div>
        <img src={backgroundImage} alt="Background" className="background-image" />
        <div className='container'>
            <div> 
                {
                display?<div>
                    <h1 className='title'>Sign Up</h1>
                    <div>
                        <div className='field_container'>
                        <input placeholder='First Name' className='name'/>
                        <input placeholder='Last Name' className='name'/>
                        </div>
                        <div className='field_container'>
                            <input placeholder='Email' className='otherField'/>
                        </div>
                        <div className='field_container'>
                        <input placeholder='Password' type={show?"text":"password"} className='otherField'/>
                        {/* <label onClick={handleShow}>{show?"Hide":"Show"}</label> */}
                        </div>
                        <button className='login'>Register</button>
                    </div>
                </div>:
                <div>
                <h1 className='title'>Login</h1>
                <div>
                    <div className='field_container'>
                        <input placeholder='Email' className='otherField'/>
                    </div>
                    <div className='field_container'>
                    <input placeholder='Password' type={show?"text":"password"} className='otherField'/>
                    {/* <label onClick={handleShow}>{show?"Hide":"Show"}</label> */}
                    </div>
                    <button className='login'>Login</button>
                </div>
            </div>
                }
                <div className={!display?'login_button':'main_button'}>
                    <button className='sign' onClick={()=>setDisplay(true)}>Register</button>
                    <button className='sign' onClick={()=>setDisplay(false)}>Login</button>
                </div>
            </div>
        </div>
    </div>
);
}
export default LoginPage;
