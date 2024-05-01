import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

import ProfilePic from './profile-Pic.webp'
import calendarIcon from './calendarIcon2.png'

import Card1 from './Cards/card1.jpg'
import Card2 from './Cards/card2.jpg'
import Card3 from './Cards/card3.jpg'
import Card4 from './Cards/card4.jpg'

import Project1 from './Project/Project1.png'
import Project2 from './Project/Project2.png'
import Project3 from './Project/Project3.png'

import mailBox from './mailBox.png'
import Tasks from './task.png'
import Projects from './projects.png'
import Clubs from './clubs.png'
import Progress from './progress.png'

export default function Dashboard() {
    return (
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <section className="flex justify-center items-center md:w-[100%] h-[100vh]">
                <div className="flex justify-center items-center w-[100%] h-[100%]">
                    <input
                        type="checkbox"
                        id="hamBurgerLeft"
                        className="hidden chBoxhmBurgLeft"
                    />
                    <nav className="flex justify-center items-start bg-[#2b90e0] h-[100vh] md:w-[13vw] pt-1 dashNavBox absolute z-[100]">
                        <div className="flex flex-col justify-start items-center w-[100%] h-full ">
                            <div className="flex justify-between items-center w-[90%] py-2">
                                <div className="text-[#ffffff] font-[550] text-[18px] justify-center items-center">
                                    Logo
                                </div>
                                <div className="hamBurgerBox">
                                    <label
                                        for="hamBurgerLeft"
                                        className=" cursor-pointer hamBurgerLeft"
                                    >
                                        <i className="fa fa-bars text-[#fff] text-[1.5rem] flex justify-center items-center"></i>
                                    </label>
                                </div>
                            </div>

                            <ul className="flex flex-col justify-center items-start w-full my-5">
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex row-reverse justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa fa-house mr-2 text-[1rem] text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Dashboard
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa fa-square-envelope mr-2 text-[1rem] text-[#fff] text-[1.2rem] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Email
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i className="fa fa-inbox mr-2 text-[#fff] text-[1.1rem] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Compose
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa fa-calendar mr-2 text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Calendar
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa fa-message mr-2 text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Chat
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa-solid fa-chart-simple mr-2 text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Charts
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa fa-pen mr-2 text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Forms
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa-solid fa-palette mr-2 text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            UI Elements
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa fa-table mr-2 text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Tables
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa-solid fa-map mr-2 text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Maps
                                        </span>
                                    </a>
                                </li>
                                <li className="flex justify-center items-center my-2 w-full">
                                    <a className="flex justify-start items-center w-full h-full py-1 leftMenuAnchor">
                                        <i class="fa fa-file-lines mr-2 text-[#fff] rounded-md w-[25px] h-[25px] flex justify-center items-center leftMenuIcons"></i>
                                        <span className="text-[#fff] font-[550] ml-2">
                                            Pages
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div
                        className="flex flex-col justify-start items-center w-[98vw] h-[100%] bg-[#505050] absolute right-0 top-0"
                        style={{ overflow: 'hidden' }}
                    >
                        <nav className="flex justify-center items-center bg-[#2b90e0] h-[7vh] w-full py-3">
                            <ul className="flex justify-center items-center w-[96%]">
                                <li className="flex justify-start items-center w-1/2">
                                    <div className="text-[#ffffff] font-[550] text-[18px] justify-center items-center mr-4">
                                        Logo
                                    </div>
                                    <div className="flex justify-center items-center bg-[#edeef2] rounded-[20px] py-[2px]">
                                        <button className="flex justify-center items-center">
                                            <i className="fa fa-search text-[#434055] rounded-full w-[1.8rem] h-[1.7rem] text-[1rem] flex justify-center items-center"></i>
                                        </button>
                                        <input
                                            type="search"
                                            placeholder="Search"
                                            className="bg-[#edeef2] focus:outline-none rounded-[20px] pr-2"
                                        />
                                    </div>
                                </li>

                                <li className="flex justify-end items-center w-1/4">
                                    <button className="flex justify-center items-center mx-5">
                                        <i className="fa fa-gear text-[1.5rem] text-[#fff]"></i>
                                    </button>
                                </li>

                                <li className="flex justify-between items-center w-1/4">
                                    <span className="w-[2px] h-[25px] bg-[rgba(255,255,255,0.2)]"></span>

                                    <div className="flex justify-center items-center">
                                        <img
                                            src={ProfilePic}
                                            className="w-[38px] rounded-full mr-4"
                                        />
                                        <div className="flex flex-col justify-center items-start leading-[18px] mx-2">
                                            <p className="text-[13px] font-[700] text-[#fff]">
                                                Robert Murdoch
                                            </p>
                                            <p className="text-[11px] font-[550] text-[#eee]">
                                                Angular Developer
                                            </p>
                                        </div>

                                        <div className="flex justify-center items-center mx-2">
                                            <img
                                                src={calendarIcon}
                                                className="w-[28px] rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <span className="w-[2px] h-[25px] bg-[rgba(255,255,255,0.2)]"></span>

                                    <div className="flex justify-center items-center">
                                        <input
                                            type="checkbox"
                                            id="hamBurgerRight"
                                            className="hidden chBoxhmBurgRight"
                                        />
                                        <label for="checkBoxRight">
                                            <i className="fa fa-bars text-[#fff] text-[1.5rem] flex justify-center items-center cursor-pointer"></i>
                                        </label>
                                        <input
                                            type="checkbox"
                                            id="checkBoxRight"
                                            className="hidden checkBoxRight"
                                        />
                                        <ul className="flex flex-col justify-start items-start absolute bg-[#2b90e0]">
                                            <li className="text-[#fff] font-[550] text-[15px] mx-2 my-2 flex justify-center items-center">
                                                <Link to="/dashboard">
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li className="text-[#fff] font-[550] text-[15px] mx-2 my-2 flex justify-center items-center">
                                                <Link to="/about">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="text-[#fff] font-[550] text-[15px] mx-2 my-2 flex justify-center items-center">
                                                Events
                                            </li>
                                            <li className="text-[#fff] font-[550] text-[15px] mx-2 my-2 flex justify-center items-center">
                                                <Link to="/blog">Blog</Link>
                                            </li>
                                            <li className="text-[#fff] font-[550] text-[15px] mx-2 my-2 flex justify-center items-center">
                                                Clubs
                                            </li>
                                            <li className="text-[#fff] font-[550] text-[15px] mx-2 my-2 flex justify-center items-center">
                                                Learning
                                            </li>
                                            <li className="text-[#fff] font-[550] text-[15px] mx-2 my-2 flex justify-center items-center">
                                                <Link to="/contact">
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li className="text-[#fff] font-[550] text-[15px] mx-2 my-2 flex justify-center items-center">
                                                <button className="contactBTN">
                                                    <Link to="/register">
                                                        Register
                                                    </Link>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex justify-center items-center w-full h-full p-5 bg-[rgba(255,255,255,0.92)]">
                            <div className="flex flex-col justify-center items-center w-full">
                                <div className="flex flex-col justify-center items-center w-full bg-[#fff] rounded-[10px] px-4 p-1 my-2">
                                    <div className="flex justify-between items-center w-[100%] px-5 py-1">
                                        <p className="flex justify-center items-center font-[650] text-[#434055]">
                                            <img
                                                src={Clubs}
                                                className="w-[26px] mr-2"
                                            />
                                            Clubs
                                        </p>
                                        <button className="flex justify-center items-center">
                                            <i class="fa fa-sliders"></i>
                                        </button>
                                    </div>
                                    <ul className="flex justify-between items-center w-full my-1">
                                        {/* clubs */}
                                        <li
                                            className="flex justify-center items-center rounded-[10px]"
                                            style={{
                                                boxShadow:
                                                    '0 1px 4px rgba(0,0,0,0.5)',
                                            }}
                                        >
                                            <img
                                                src={Card3}
                                                className="w-[220px] rounded-[10px]"
                                            />
                                        </li>
                                        <li
                                            className="flex justify-center items-center rounded-[10px]"
                                            style={{
                                                boxShadow:
                                                    '0 1px 4px rgba(0,0,0,0.5)',
                                            }}
                                        >
                                            <img
                                                src={Card3}
                                                className="w-[220px] rounded-[10px]"
                                            />
                                        </li>
                                        <li
                                            className="flex justify-center items-center rounded-[10px]"
                                            style={{
                                                boxShadow:
                                                    '0 1px 4px rgba(0,0,0,0.5)',
                                            }}
                                        >
                                            <img
                                                src={Card3}
                                                className="w-[220px] rounded-[10px]"
                                            />
                                        </li>
                                        <li
                                            className="flex justify-center items-center rounded-[10px]"
                                            style={{
                                                boxShadow:
                                                    '0 1px 4px rgba(0,0,0,0.5)',
                                            }}
                                        >
                                            <img
                                                src={Card3}
                                                className="w-[220px] rounded-[10px]"
                                            />
                                        </li>
                                        <li
                                            className="flex justify-center items-center rounded-[10px]"
                                            style={{
                                                boxShadow:
                                                    '0 1px 4px rgba(0,0,0,0.5)',
                                            }}
                                        >
                                            <img
                                                src={Card3}
                                                className="w-[220px] rounded-[10px]"
                                            />
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex justify-center items-center w-full">
                                    <ul className="flex justify-between items-center w-full">
                                        {/* projects */}
                                        <li className="flex justify-center items-center w-[49%] bg-[#fff] rounded-[10px] my-2">
                                            <ul className="flex flex-col justify-center items-center">
                                                <div
                                                    className="flex justify-between items-center w-[100%] px-5 py-1"
                                                    style={{
                                                        borderBottom:
                                                            '1px solid #777',
                                                    }}
                                                >
                                                    <p className="flex justify-center items-center font-[650] text-[#434055]">
                                                        <img
                                                            src={Projects}
                                                            className="w-[26px] mr-2"
                                                        />
                                                        Projects
                                                    </p>
                                                    <button className="flex justify-center items-center">
                                                        <i class="fa fa-sliders"></i>
                                                    </button>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <li
                                                        className="flex flex-col justify-center items-start rounded-[10px] px-2 py-4 m-3 bg-[#fff]"
                                                        style={{
                                                            boxShadow:
                                                                '0 0 10px rgba(0,0,0,0.1)',
                                                        }}
                                                    >
                                                        <div className="flex justify-center items-center mb-1">
                                                            <img
                                                                src={Project1}
                                                                className="w-[42px]"
                                                            />
                                                            <p className="flex flex-col justify-center items-start ml-2">
                                                                <p className="text-[.9rem] text-[#32373d] font-[700]">
                                                                    Bassline
                                                                    Project
                                                                </p>
                                                                <p className="text-[.8rem] text-[#32373d] font-[550]">
                                                                    for User
                                                                </p>
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center items-center mt-1">
                                                            <p className="text-[13px] text-[#67748e]">
                                                                Lorem ipsum is
                                                                simply dummy
                                                                text of the
                                                                printing and
                                                                typesetting
                                                                industry.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li
                                                        className="flex flex-col justify-center items-start rounded-[10px] px-2 py-4 m-3 bg-[#fff]"
                                                        style={{
                                                            boxShadow:
                                                                '0 0 10px rgba(0,0,0,0.1)',
                                                        }}
                                                    >
                                                        <div className="flex justify-center items-center mb-1">
                                                            <img
                                                                src={Project2}
                                                                className="w-[42px]"
                                                            />
                                                            <p className="flex flex-col justify-center items-start ml-2">
                                                                <p className="text-[.9rem] text-[#32373d] font-[700]">
                                                                    Bassline
                                                                    Project
                                                                </p>
                                                                <p className="text-[.8rem] text-[#32373d] font-[550]">
                                                                    for User
                                                                </p>
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center items-center mt-1">
                                                            <p className="text-[13px] text-[#67748e]">
                                                                Lorem ipsum is
                                                                simply dummy
                                                                text of the
                                                                printing and
                                                                typesetting
                                                                industry.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li
                                                        className="flex flex-col justify-center items-start rounded-[10px] px-2 py-4 m-3 bg-[#fff]"
                                                        style={{
                                                            boxShadow:
                                                                '0 0 10px rgba(0,0,0,0.1)',
                                                        }}
                                                    >
                                                        <div className="flex justify-center items-center mb-1">
                                                            <img
                                                                src={Project3}
                                                                className="w-[42px]"
                                                            />
                                                            <p className="flex flex-col justify-center items-start ml-2">
                                                                <p className="text-[.9rem] text-[#32373d] font-[700]">
                                                                    Bassline
                                                                    Project
                                                                </p>
                                                                <p className="text-[.8rem] text-[#32373d] font-[550]">
                                                                    for User
                                                                </p>
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center items-center mt-1">
                                                            <p className="text-[13px] text-[#67748e]">
                                                                Lorem ipsum is
                                                                simply dummy
                                                                text of the
                                                                printing and
                                                                typesetting
                                                                industry.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        {/* progress */}
                                        <li className="flex justify-center items-start w-[49%] bg-[#fff] rounded-[10px]">
                                            <div
                                                className="flex justify-between items-center w-[100%] px-5 py-1"
                                                style={{
                                                    borderBottom:
                                                        '1px solid #777',
                                                }}
                                            >
                                                <p className="flex justify-center items-center font-[650] text-[#434055]">
                                                    <img
                                                        src={Progress}
                                                        className="w-[26px] mr-2"
                                                    />
                                                    Progress
                                                </p>
                                                <button className="flex justify-center items-center">
                                                    <i class="fa fa-sliders"></i>
                                                </button>
                                            </div>

                                            <div className="h-[200px]"></div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex justify-center items-center w-full">
                                    <ul className="flex justify-between items-center w-full">
                                        {/* chatBox */}
                                        <li className="flex justify-center items-start w-[49%] bg-[#fff] rounded-[10px] mt-2">
                                            <div
                                                className="flex justify-between items-center w-[100%] px-5 py-1"
                                                style={{
                                                    borderBottom:
                                                        '1px solid #777',
                                                }}
                                            >
                                                <p className="flex justify-center items-center font-[650] text-[#434055]">
                                                    <img
                                                        src={mailBox}
                                                        className="w-[26px] mr-2"
                                                    />
                                                    Chat Box
                                                </p>
                                                <button className="flex justify-center items-center">
                                                    <i class="fa fa-sliders"></i>
                                                </button>
                                            </div>

                                            <div className="h-[200px]"></div>
                                        </li>

                                        {/* taskList */}
                                        <li className="flex justify-center items-start w-[49%] bg-[#fff] rounded-[10px] mt-2">
                                            <div
                                                className="flex justify-between items-center w-[100%] px-5 py-1"
                                                style={{
                                                    borderBottom:
                                                        '1px solid #777',
                                                }}
                                            >
                                                <p className="flex justify-center items-center font-[650] text-[#434055]">
                                                    <img
                                                        src={Tasks}
                                                        className="w-[26px] mr-2"
                                                    />
                                                    Tasks List
                                                </p>
                                                <button className="flex justify-center items-center">
                                                    <i class="fa fa-sliders"></i>
                                                </button>
                                            </div>

                                            <div className="h-[200px]"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
