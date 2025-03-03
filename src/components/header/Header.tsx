import React from 'react';
import Link from "next/link";
import {IoNotificationsOutline} from "react-icons/io5";
import {RiMenu3Fill} from "react-icons/ri";


const Header = () => {
    return (
        <div className="  border-b border-b-zinc-300">
            <div className="container  flex items-center justify-between w-full sticky top-0 w-full left-0">


                <Link className="text-xl italic font-bold" href={'/'}>Chat-Me</Link>

                <nav className="hidden md:flex items-center gap-3">
                    <Link className="hover:underline hoverEffect" href='/'>Chat's</Link>
                    <Link className="hover:underline hoverEffect" href='/'>Group's</Link>
                    <Link className="hover:underline hoverEffect" href='/'>Followers</Link>
                </nav>


                <div className="flex items-center gap-3">


                    <Link
                        className="px-4 py-1.5 bg-zinc-400 text-white rounded-lg shadow-sm text-sm font-medium hover:scale-110 hoverEffect hover:bg-zinc-800/40"
                        href='login'>Sign In</Link>
                    <button title="notification" className="cursor-pointer">
                        <IoNotificationsOutline className=""/>
                    </button>
                    <button className="block md:hidden">
                        <RiMenu3Fill size='18'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;