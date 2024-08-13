import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll';
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
export default function Navbar() {
    const [menu, setMenu] = useState("")
    const [closeMenu, setCloseMenu] = useState("hidden");
    const [Navbar, setNavBar] = useState("hidden");

    const handleOpenMenu = () => {
        setMenu("hidden");
        setCloseMenu("flex");
        setNavBar("static");
    }

    const handleCloseMenu = () => {
        setMenu("flex");
        setCloseMenu("hidden");
        setNavBar("hidden");
    }

    const handleClickLink = () => {
        setMenu("flex");
        setCloseMenu("hidden");
        setNavBar("hidden");
    }

    return (
        <div className="">
            <header className="flex fixed justify-between md:p-0  w-full z-50 text-black bg-white">

                <a className="flex md:pl-10 p-2" href="/">
                    <div className="flex gap-1 w-full">
                        <img src="./newlogo.png" className="md:w-full md:h-full w-10 h-10" alt="" />
                    </div>
                </a>
                <div className="md:flex hidden py-5 gap-24 md:pr-14 font-semibold">
                    <div className="flex gap-8 mt-2">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Home</Link>
                        <Link
                            to="blog"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Blog</Link>
                        <Link
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">About Us</Link>
                        <Link
                            to="contactus"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={500}
                            className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Contact Us</Link>
                    </div>

                </div>


                <div className="flex text-black text-4xl md:hidden p-3">
                    <IoMenu onClick={handleOpenMenu} className={`${menu}`} />
                    <IoMdClose onClick={handleCloseMenu} className={`${closeMenu}`} />
                </div>


            </header>
            <nav id="navbar" className={`fixed w-full h-full py-[120px] z-40 md:hidden p-2 bg-gray-100 text-black ${Navbar}`}>
                <div className="grid justify-center text-center gap-5 h-full   ">

                    <Link
                        onClick={handleClickLink}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Home</Link>
                    <Link
                        onClick={handleClickLink}
                        to="blog"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Blog</Link>
                    <Link
                        onClick={handleClickLink}
                        to="aboutus"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">About Us</Link>
                    <Link
                        onClick={handleClickLink}
                        to="contactus"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Contact Us</Link>



                </div>
                <h1 className="text-center text-[#FF863C]">© 2024 CloudGuru. All Rights Reserved</h1>
            </nav>
        </div>
    )
}
