"use client";

import React, {useState} from "react";
import Link from "next/link";
import {FaShoppingCart} from 'react-icons/fa';
import { HiMenuAlt3 } from "react-icons/hi"; // Hamberburger Menu 
import { HiX } from "react-icons/hi"; //Close Menu
import { FaShop } from "react-icons/fa6";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen); //Toggle menu open/close
    };

    const closeMenu = () => {
        setIsMenuOpen(false); //Close the menu
    };

    return (
        <header className="bg-gray-800 text-white py-5 flex justify-between items-center px-10 relative z-10">

            <h1 className="text-2xl font-bold">MotoMajesty</h1>

            {/* {Desktop Navber} */}
        <nav className="hidden md:flex gap-10 text-white font-bold">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/About" onClick={closeMenu}>About</Link>
            <Link href="/Bikes" onClick={closeMenu}>Bikes</Link>
            <Link href="/Contact" onClick={closeMenu}>Contact</Link>
            <FaShoppingCart className="text-white text-xl" />
            </nav>

        {/* {Mobile Navbar (Hamburger Menu) */}
        <div className="md:hidden flex items-center">
            <HiMenuAlt3
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu} //Toggle menu on click
            />

        </div>

        {/* {Mobile Menu} */}
        <div
        className={`${
        isMenuOpen ? 'block' : 'hidden' 
        } absolute  top-0  left-0  w-full  h-full  bg-gray-800 p-5  md:hidden  z-20 `}
        >

        {/* {Close Button} */}
        <div className="flex justify-end">
            <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu} //Close Menu when clicked
            />       
        </div >

        <nav className="flex flex-row items-center gap-3 text-white font-bold ">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/About" onClick={closeMenu}>About</Link>
            <Link href="/Bikes" onClick={closeMenu}>Bikes</Link>
            <Link href="Contact" onClick={closeMenu}>Contact</Link>
            <FaShoppingCart className="text-white text-xl" />

        </nav>
            
        </div>
        </header>
    );
};

export default Header;