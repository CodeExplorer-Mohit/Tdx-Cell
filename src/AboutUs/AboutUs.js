import React from 'react'
import Header from '../HomeComp/Header'
import Footer from '../HomeComp/Footer'
import aboutPic from './aboutbgPicNew.png'
import AboutSec2 from './aboutSec2.png'
import Search from './search.png'
import Goal from './goal.png'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />

            <section className="flex justify-center items-center md:w-[100%] bg-[#] py-10">
                <div className="flex flex-col justify-center items-center md:w-[90%] bgAbout py-5">
                    <div className="flex justify-center items-center w-full my-10">
                        <h2 className="text-[#222] text-[2.2rem] font-[900] mt-10 SectionHead">
                            About Us
                        </h2>
                    </div>

                    <div className="flex justify-center items-center w-full bg-[] pt-10">
                        <div className="flex justify-center items-center md:w-1/2 relatvie">
                            <img src={aboutPic}></img>
                        </div>
                        <div className="flex flex-col justify-center items-start md:w-1/2">
                            <h3
                                className="text-[1.5rem] text-[#333] font-bold tracking-[.5px] my-1 px-5"
                                style={{ textShadow: '0 0 5px rgba(0,0,0,.1)' }}
                            >
                                About
                                <span
                                    className="text-[#333] ml-2"
                                    style={{
                                        textShadow: '0 0 5px rgba(0,0,0,.1)',
                                    }}
                                >
                                    Our Company
                                </span>
                            </h3>
                            <p
                                className="text-[1rem] text-[#67748e] px-5 my-1"
                                style={{
                                    textShadow: '0 0 4px rgba(0,0,0,0.1)',
                                }}
                            >
                                TDX-cell is a students club powered by parent
                                company TDPVista. it'll help students and
                                institutions to make learning easy.TDX-cell will
                                be only in colleges, universities registered
                                with the company.TDX-CELL, Training and
                                Development Execution (TDX)-Cell is a platform
                                for young students to upskill and develop
                                leadership potential, in-demand skills,
                                self-confidence and self-learning
                                capabilities.It is the place where one can gain
                                corporate experience while boosting their career
                                prospects. To bring our vision to life, TDPVista
                                is establishing college chapters of TDX-CELL in
                                the form of student-driven clubs, where students
                                will connect and transform their thinking.
                                coordinators and members will be of respective
                                college but rules and procedures will be same
                                for every college. please provide me an
                                architecture, modular flow and all the other
                                things I should keep in mind while building the
                                platform and website for the same.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center md:w-[100%] relative z-[-1] py-10">
                <div className="flex flex-col justify-center items-center w-[100%] bgAbout">
                    <div className="flex justify-center items-center my-10">
                        <h2 className="text-[2.1rem] text-[#222] font-[800] SectionHead">
                            Heading
                        </h2>
                    </div>

                    <ul className="flex justify-center items-center w-[100%] my-10">
                        <li className="flex flex-col justify-center items-center w-[35%]">
                            <div className="flex justify-center items-center relative w-full my-10">
                                <div className="aboutBoxBG1">
                                    <p>01</p>
                                </div>
                                <div className="flex justify-center items-center bg-[#fff] rounded-[15px] px-3 py-6 w-[60%] AboutBoxes1">
                                    <img
                                        src={Search}
                                        width="40px"
                                        className="mx-3"
                                        style={{ transform: 'skew(10deg)' }}
                                    />
                                    <p
                                        className="flex flex-col justify-center items-start w-full mx-3"
                                        style={{ transform: 'skew(10deg)' }}
                                    >
                                        <p className="text-[1.2rem] text-[#fd7c77] font-[600]">
                                            Heading
                                        </p>
                                        <p className="text-[13px] text-[#808080] leading-[15px] w-[95%]">
                                            Lorem ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.Lorem ipsum has been the
                                            industry standard.
                                        </p>
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center relative w-full my-10">
                                <div className="aboutBoxBG1">
                                    <p>02</p>
                                </div>
                                <div className="flex justify-center items-center bg-[#fff] rounded-[15px] px-3 py-6 w-[60%] AboutBoxes1">
                                    <img
                                        src={Search}
                                        width="40px"
                                        className="mx-3"
                                        style={{ transform: 'skew(10deg)' }}
                                    />
                                    <p
                                        className="flex flex-col justify-center items-start w-full mx-3"
                                        style={{ transform: 'skew(10deg)' }}
                                    >
                                        <p className="text-[1.2rem] text-[#fd7c77] font-[600]">
                                            Heading
                                        </p>
                                        <p className="text-[13px] text-[#808080] leading-[15px] w-[95%]">
                                            Lorem ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.Lorem ipsum has been the
                                            industry standard.
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-center items-center w-[20%]">
                            <div className="flex justify-center items-center aboutCircle rounded-full w-[250px] h-[250px] outerCircle">
                                <div className="flex flex-col justify-center items-center leading-[25px]">
                                    <p className="text-[1.3rem] text-[#808080] ">
                                        INFOGRAPHIC
                                    </p>
                                    <p className="text-[1.5rem] text-[#303030] font-[800]">
                                        ELEMENTS
                                    </p>
                                    <span className="spanBorderColor mt-1"></span>
                                    <p className="text-[11px] text-[#808080] w-[55%] leading-[15px] text-center my-1">
                                        Lorem ipsum is simply dummy text of the
                                        printing and typesetting industry.Lorem
                                        ipsum has been the industry standard.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col justify-center items-center w-[35%]">
                            <div className="flex justify-center items-center relative w-full my-10">
                                <div className="aboutBoxBG2">
                                    <p>03</p>
                                </div>
                                <div className="flex justify-center items-center bg-[#fff] rounded-[15px] px-3 py-6 w-[60%] AboutBoxes2">
                                    <img
                                        src={Search}
                                        width="40px"
                                        className="mx-3"
                                        style={{ transform: 'skew(-10deg)' }}
                                    />
                                    <p
                                        className="flex flex-col justify-center items-start w-full mx-3"
                                        style={{ transform: 'skew(-10deg)' }}
                                    >
                                        <p className="text-[1.2rem] text-[#2b90e0] font-[600]">
                                            Heading
                                        </p>
                                        <p className="text-[13px] text-[#808080] leading-[15px] w-[95%]">
                                            Lorem ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.Lorem ipsum has been the
                                            industry standard.
                                        </p>
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center relative w-full my-10">
                                <div className="aboutBoxBG2">
                                    <p>04</p>
                                </div>
                                <div className="flex justify-center items-center bg-[#fff] rounded-[15px] px-3 py-6 w-[60%] AboutBoxes2">
                                    <img
                                        src={Search}
                                        width="40px"
                                        className="mx-3"
                                        style={{ transform: 'skew(-10deg)' }}
                                    />
                                    <p
                                        className="flex flex-col justify-center items-start w-full mx-3"
                                        style={{ transform: 'skew(-10deg)' }}
                                    >
                                        <p className="text-[1.2rem] text-[#2b90e0] font-[600]">
                                            Heading
                                        </p>
                                        <p className="text-[13px] text-[#808080] leading-[15px] w-[95%]">
                                            Lorem ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.Lorem ipsum has been the
                                            industry standard.
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="flex justify-center items-center md:w-[100%] relative z-[-1] py-10">
                <div className="flex justify-center items-center w-[100%] bgAbout">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center mt-10">
                            <h2 className="text-[2.1rem] text-[#222] font-[800] SectionHead">
                                What We Do
                            </h2>
                        </div>
                        <div className="flex justify-center items-center my-10">
                            <ul className="flex flex-col justify-center items-center">
                                <li className="flex justify-center items-center bg-[#fff] p-5 m-5 rounded-[10px] whatWeDoLis">
                                    <img src={Goal} className="mx-2" />
                                    <div className="flex flex-col justify-center items-start mx-2">
                                        <p className="text-[1.1rem] text-[#01305a] font-[550]">
                                            Mini head
                                        </p>
                                        <p className="text-[#67748e]">
                                            It'll help students and institutions
                                            to make learning easy.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex justify-center items-center bg-[#fff] p-5 m-5 rounded-[10px] whatWeDoLis">
                                    <img src={Goal} className="mx-2" />
                                    <div className="flex flex-col justify-center items-start mx-2">
                                        <p className="text-[1.1rem] text-[#01305a] font-[550]">
                                            Mini head
                                        </p>
                                        <p className="text-[#67748e]    ">
                                            It'll help students and institutions
                                            to make learning easy.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex justify-center items-center bg-[#fff] p-5 m-5 rounded-[10px] whatWeDoLis">
                                    <img src={Goal} className="mx-2" />
                                    <div className="flex flex-col justify-center items-start mx-2">
                                        <p className="text-[1.1rem] text-[#01305a] font-[550]">
                                            Mini head
                                        </p>
                                        <p className="text-[#67748e]">
                                            It'll help students and institutions
                                            to make learning easy.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={AboutSec2}
                                    className="w-[600px] mx-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
