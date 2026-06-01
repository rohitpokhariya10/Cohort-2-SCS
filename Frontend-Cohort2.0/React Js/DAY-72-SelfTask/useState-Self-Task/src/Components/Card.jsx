import React from "react";
import { FaMoon, FaSun, FaDribbble, FaBehance, FaTwitter } from "react-icons/fa";
import { useState } from 'react';


const Card = () => {
    const [isFollowing, setisFollowing] = useState(false)
    const [follow, setFollow] = useState(1500)
    function updateFollower() {
        if (isFollowing) {
            //follow karta bhai -1 kar
            setisFollowing(false)
            setFollow(follow - 1)
        }
        else {
            //follow nhi karta follower +1 kar bhai
            setisFollowing(true)
            setFollow(follow + 1)
        }
    }
    //2 feature
    const [isDark, setIsDark] = useState(false);
    function toggleTheme() {
        setIsDark(!isDark)
    }

    return (



        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* Card */}
            {/* Agar isDark TRUE hai means dark  karna hai ab----> "bg-black text-white" use karo*/}
            {/* Agar isDark FALSE hai dark nhi hai white theme karo----> "bg-white text-black" use karo */}
            <div className= {`w-[320px]  rounded-2xl shadow-lg p-6 ${isDark?"bg-black text-white":"bg-white-300 text-black"}`}>

                {/* Top Nav (Dark / Light icon placeholder) */}
                <nav className="flex justify-end">
                    {isDark ? (
                        <FaSun className="cursor-pointer" onClick={toggleTheme} />
                    ) : (
                        <FaMoon className="cursor-pointer" onClick={toggleTheme} />
                    )}
                </nav>


                {/* Profile Section */}
                <div className="flex flex-col items-center mt-4">
                    <img
                        src="https://i.pravatar.cc/150?img=3"
                        alt="profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />

                    <h2 className="mt-3 text-lg font-semibold">
                        Rohit Singh Pokhariya
                    </h2>

                    <h3 className="text-sm text-gray-500">
                        Frontend Developer
                    </h3>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-4">
                        <div className={`w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer 
                            ${isDark?"bg-blue-500":"bg-gray-100"}`}>
                            <FaDribbble />
                        </div>
                        <div  className={`w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer 
                            ${isDark?"bg-blue-500":"bg-gray-100"}`}>
                            <FaBehance />
                        </div>
                        <div  className={`w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer 
                            ${isDark?"bg-blue-500":"bg-gray-100"}`}>
                            <FaTwitter />
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex items-center justify-between w-full mt-6 text-center">
                        <div>
                            <h4 className="font-semibold">300</h4>
                            <p className="text-xs text-gray-500">Posts</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">{follow}</h4>
                            <p className="text-xs text-gray-500">Followers</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">900</h4>
                            <p className="text-xs text-gray-500">Following</p>
                        </div>
                    </div>

                    {/* Follow Button */}
                    <button className={`mt-6 px-6 py-2 rounded-full bg-blue-800 text-white text-sm active:scale-95  
         ${isFollowing ? "bg-red-500" : "bg-blue-600"}`}
                        onClick={updateFollower}>
                        {isFollowing ? "Unfollow" : "Follow"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;
