import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Membership() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const handleSignIn = () => {
      navigate('/login',{state:{getEmail:email}});
    }
    return (
        <div className=" flex flex-col items-center gap-5 py-10">
            <div className="text-center">
                Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className="flex items-centers">
                <input className="border border-gray-500 p-3 pr-70 mr-2" type="text" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button className="bg-red-600 text-white text-2xl cursor-pointer py-2 px-5 rounded font-bold" onClick={handleSignIn}>Get Started
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>

    )
}

export default Membership
