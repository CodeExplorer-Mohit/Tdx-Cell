import React, { useState } from 'react'
import Header from '../HomeComp/Header'
import Footer from '../HomeComp/Footer'

import contactUsPic from './contactUsPic.png'

export default function ContactUs() {
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    return (
        <>
            <Header />

            <section className="flex justify-center items-center w-[100%] my-10">
                <div className="flex justify-center items-center w-[70%]">
                    <div className="flex flex-col justify-center items-start w-1/2">
                        <h2 className="text-[2.25rem] text-[#111] font-[700]">
                            Let's Work Together.
                        </h2>
                        <p className="text-[#444] text-[.9rem] text-[#111] my-2">
                            We would like to know more about you please fill out
                            the below and let's grow togheter.
                        </p>
                        <button className="bg-[#0992e4] hover:bg-[#f2d34b] text-[#fff] font-[700] px-4 py-2 rounded-sm my-2">
                            Contact Us
                        </button>
                    </div>

                    <div className="flex justify-center items-center w-1/2 py-5">
                        <div className="flex justify-center items-center mx-5">
                            <img src={contactUsPic} className="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center w-[100%] my-10">
                <div className="flex justify-center items-start w-[80%]">
                    <div className="flex justify-center items-center w-[40%]">
                        <ul className="flex flex-col justify-center items-start">
                            <li className="flex justify-center items-center my-2">
                                <i className="fa fa-location text-[1.1rem] text-[#0992e4] bg-[#e4f0fc] p-2 rounded-[10px] mx-2"></i>
                                <p className="flex flex-col justify-center items-start mx-2">
                                    <p className="text-[.9rem] font-[700] text-[#333]">
                                        Bhopal
                                    </p>
                                    <p className="text-[.7rem] text-[#444]">
                                        Madhay Pradesh, India
                                    </p>
                                </p>
                            </li>
                            <li className="flex justify-center items-center my-2">
                                <i className="fa fa-phone text-[1.1rem] text-[#0992e4] bg-[#e4f0fc] p-2 rounded-[10px] mx-2"></i>
                                <p className="flex flex-col justify-center items-start mx-2">
                                    <p className="text-[.9rem] font-[700] text-[#333]">
                                        Phone
                                    </p>
                                    <p className="text-[.7rem] text-[#444]">
                                        +0123456789
                                    </p>
                                </p>
                            </li>
                            <li className="flex justify-center items-center my-2">
                                <i class="fa-solid fa-envelope text-[1.1rem] text-[#0992e4] bg-[#e4f0fc] p-2 rounded-[10px] mx-2"></i>
                                <p className="flex flex-col justify-center items-start mx-2">
                                    <p className="text-[.9rem] font-[700] text-[#333]">
                                        Email
                                    </p>
                                    <p className="text-[.7rem] text-[#444]">
                                        dummy.@gmail.com
                                    </p>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-start items-center w-[60%]">
                        <form className="flex flex-col justify-center items-center w-[80%]">
                            <div className="flex flex-col justify-center items-start w-full my-1 w-[80%]">
                                <label
                                    for="fullName"
                                    className="text-[#444] text-[.95rem] my-2"
                                >
                                    Full Name<sup>*</sup>
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => {
                                        setFullName(e.target.value)
                                    }}
                                    id="fullName"
                                    placeholder="First Name"
                                    className="text-[.8rem] border border-2 px-3 py-2 focus:outline-none focus:border-[#0992e4] rounded-sm w-[100%]"
                                />
                            </div>

                            <div className="flex flex-col justify-center items-start w-full my-1 w-[80%]">
                                <label
                                    for="emailAddress"
                                    className="text-[#444] text-[.95rem] my-2"
                                >
                                    Email Address<sup>*</sup>
                                </label>
                                <input
                                    type="text"
                                    value={emailAddress}
                                    onChange={(e) => {
                                        setEmailAddress(e.target.value)
                                    }}
                                    id="emailAddress"
                                    placeholder="Email Address"
                                    className="text-[.8rem] border border-2 px-3 py-2 focus:outline-none focus:border-[#0992e4] rounded-sm w-[100%]"
                                />
                            </div>

                            <div className="flex flex-col justify-center items-start w-full my-1 w-[80%]">
                                <label
                                    for="phoneNumber"
                                    className="text-[#444] text-[.95rem] my-2"
                                >
                                    Phone Number<sup>*</sup>
                                </label>
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        setPhoneNumber(e.target.value)
                                    }}
                                    id="phoneNumber"
                                    placeholder="Phone Number"
                                    className="text-[.8rem] border border-2 px-3 py-2 focus:outline-none focus:border-[#0992e4] rounded-sm w-[100%]"
                                />
                            </div>

                            <div className="flex flex-col justify-center items-start w-full my-1 w-[80%]">
                                <label
                                    for="message"
                                    className="text-[#444] text-[.95rem] my-2"
                                >
                                    Message<sup>*</sup>
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value)
                                    }}
                                    id="message"
                                    placeholder="Message"
                                    className="text-[.8rem] border border-2 px-3 py-2 focus:outline-none focus:border-[#0992e4] rounded-sm w-[100%]"
                                ></textarea>
                            </div>

                            <div className="flex justify-center items-center w-full my-1 w-[80%]">
                                <button className="bg-[#0992e4] hover:bg-[#f2d34b] shadow-lg text-[#fff] text-[1.2rem] font-[600] my-4 w-full py-2 rounded-sm">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
