import React from 'react'
import './Header.css'
import classes from './Header.module.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function () {
    return (
        <>
            <nav className="flex justify-center items-center headerBg w-[100%] fixed z-[3000] top-0">
                <div className="flex justify-center items-center w-[100%] md:h-[10vh] h-[7vh]">
                    <div className="flex justify-between items-center w-[85%]">
                        <div className="text-[#ffffff] font-[550] text-[18px] justify-center items-center">
                            <NavLink to="/">Logo</NavLink>
                        </div>

                        {/* <div className="md:hidden">
                            <label htmlFor="menuHamburger" className="md:hidden cursor-pointer">
                                <i className="fa fa-bars text-[#ffffff] text-[1.5rem]"></i>
                            </label>
                            <input type="checkbox" id="menuHamburger" className="menuHamburger hidden" />
                            <ul className="flex flex-col justify-center items-start absolute top-[7vh] right-[-50%] px-5 py-5 md:hidden ">
                                <li className="text-[#ffffff] font-[550] text-[15px] mx-2 my-1 flex justify-center items-center">Dashboard</li>
                                <li className="text-[#ffffff] font-[550] text-[15px] mx-2 my-1 flex justify-center items-center">About Us</li>
                                <li className="text-[#ffffff] font-[550] text-[15px] mx-2 my-1 flex justify-center items-center">Clubs</li>
                                <li className="text-[#ffffff] font-[550] text-[15px] mx-2 my-1 flex justify-center items-center">Learning</li>
                                <li className="text-[#ffffff] font-[550] text-[15px] mx-2 my-1 flex justify-center items-center">Events</li>
                                <li className="text-[#ffffff] font-[550] text-[15px] mx-2 my-1 flex justify-center items-center">Blog</li>
                                <li className="text-[#ffffff] font-[550] text-[15px] mx-2 my-1 flex justify-center items-center">Contact Us</li>
                                <li className="text-[#ffffff] font-[550] text-[15px] mx-2 my-1   flex justify-center items-center">
                                    <button className="contactBTN">Register</button>
                                </li>                       
                            </ul>

                        </div>     */}
                        <ul
                            className={`flex justify-center items-center md:flex hidden ${classes.ul}`}
                        >
                            <li className="text-[#ffffff] font-[550] text-[15px] mx-2 flex justify-center items-center">
                                <NavLink
                                    activeClassName={classes.active}
                                    to="/dashboard"
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="text-[#ffffff] font-[550] text-[15px] mx-2 flex justify-center items-center">
                                <NavLink
                                    activeClassName={classes.active}
                                    to="/about"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="text-[#ffffff] font-[550] text-[15px] mx-2 flex justify-center items-center">
                                <NavLink
                                    activeClassName={classes.active}
                                    to="/events"
                                >
                                    Events
                                </NavLink>
                            </li>
                            <li className="text-[#ffffff] font-[550] text-[15px] mx-2 flex justify-center items-center">
                                <NavLink
                                    activeClassName={classes.active}
                                    to="/blog"
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="text-[#ffffff] font-[550] text-[15px] mx-2 flex justify-center items-center">
                                <NavLink
                                    activeClassName={classes.active}
                                    to="/clubs"
                                >
                                    Clubs
                                </NavLink>
                            </li>
                            <li className="text-[#ffffff] font-[550] text-[15px] mx-2 flex justify-center items-center">
                                <NavLink
                                    to="/learning"
                                    activeClassName={classes.active}
                                >
                                    Learning
                                </NavLink>
                            </li>
                            <li className="text-[#ffffff] font-[550] text-[15px] mx-2 flex justify-center items-center">
                                <NavLink
                                    activeClassName={classes.active}
                                    to="/contact"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="text-[#ffffff] font-[550] text-[15px] mx-2 flex justify-center items-center">
                                <button className="contactBTN">
                                    <NavLink
                                        activeClassName={classes.active}
                                        to="/register"
                                    >
                                        Register
                                    </NavLink>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}
