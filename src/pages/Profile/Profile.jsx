import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
const Profile = () => {
    const { name, email, password, phoneNo } = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate('/')
    const { setIsLogin } = useContext(UserContext)
  const handleLogout = () => {
    localStorage.clear();
    setIsLogin("false");
    navigate('/')
  }
    return (
        <>
            <Navbar />
            <div className='py-22 flex flex-col items-center gap-10'>
                <div className='w-full mt-7'>
                    <h1 className='text-4xl font-bold text-white text-left px-75'>Account</h1>
                </div>

                <section className="bg-gray-800 rounded-lg border border-black/10 dark:border-white/10  w-[70%]">
                    <div className="p-4 sm:p-6 border-b border-black/10 dark:border-white/10">
                        <h3 className="text-white text-lg font-bold leading-tight ">User Details</h3>
                    </div>
                    <div className="p-4 sm:p-6">
                        <div className="flex justify-between gap-x-6 py-3 border-b border-black/10 dark:border-white/10">
                            <p className="text-gray-400 text-sm font-normal leading-normal">Name</p>
                            <p className="text-white text-sm font-normal leading-normal text-right">{name}</p>
                        </div>
                        <div className="flex justify-between gap-x-6 py-3 border-b border-black/10 dark:border-white/10">
                            <p className="text-gray-400 text-sm font-normal leading-normal">Email</p>
                            <p className="text-white text-sm font-normal leading-normal text-right">{email}</p>
                        </div>
                        <div className="flex justify-between gap-x-6 py-3">
                            <p className="text-gray-400 text-sm font-normal leading-normal">Phone Number</p>
                            <p className="text-white text-sm font-normal leading-normal text-right">+91 {phoneNo}</p>
                        </div>
                    </div>
                </section>
                 <section className="bg-gray-800 rounded-lg border border-white/10 w-[70%]">
                    <div className="p-4 sm:p-6 border-b border-white/10">
                        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Subscription &amp; Billing</h3>
                    </div>
                    <div className="p-4 sm:p-6">
                        <div className="flex justify-between gap-x-6 py-3 border-b  border-white/10">
                            <p className="text-gray-400 text-sm font-normal leading-normal">Current Plan</p>
                            <p className="text-white text-sm font-normal leading-normal text-right">Premium HD (4K Ultra HD)</p>
                        </div>
                        <div className="flex justify-between gap-x-6 py-3 border-b  border-white/10">
                            <p className="text-gray-400 text-sm font-normal leading-normal">Next Billing Date</p>
                            <p className="text-white text-sm font-normal leading-normal text-right">December 03, 2026</p>
                        </div>
                        <div className="flex justify-between gap-x-6 py-3">
                            <p className="text-gray-400 text-sm font-normal leading-normal">Payment Method</p>
                            <p className="text-white text-sm font-normal leading-normal text-right">Visa **** 1234</p>
                        </div>
                        <div class="mt-6 flex flex-col sm:flex-row gap-4">
                            <button className="flex w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-primary text-white gap-2 text-sm font-bold  px-4 bg-red-500">Change Plan</button>
                            <button className="flex w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-white/10  text-white gap-2 text-sm font-bold  px-4 hover:bg-black/10">Cancel Subscription</button>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-800 rounded-lg border border-white/10 w-[70%]">
                    <div className="p-4 sm:p-6 border-b border-white/10">
                        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Actions</h3>
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col gap-4">
                        <div className="flex items-center gap-4 min-h-14 justify-between">
                            <div className="flex items-center gap-4">
                                <LogoutIcon sx={{color:'red'}}/>
                                <p className="text-white text-base font-normal leading-normal flex-1 truncate">Sign out of all devices</p>
                            </div>
                            <div className="shrink-0">
                                <button className="text-sm sm:text-base font-medium leading-normal text-red-500 cursor-pointer" onClick={handleLogout}>Sign Out</button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 min-h-14 justify-between">
                            <div className="flex items-center gap-4">
                                <DeleteIcon sx={{color:'red'}}/>
                                <p className="text-white text-base font-normal leading-normal flex-1 truncate">Delete Account</p>
                            </div>
                            <div className="shrink-0">
                                <button className="text-sm sm:text-base font-medium  text-red-500  cursor-pointer" onClick={handleLogout}>Delete</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Profile
