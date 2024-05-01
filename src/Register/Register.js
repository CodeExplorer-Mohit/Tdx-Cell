import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
export default function Register() {
    const [instituteName, setInstituteName] = useState('')
    // const [instituteAddress, setinstituteAddress] = useState('');

    const registerForm = () => {
        console.log()
    }

    return (
        <>
            <section
                className="flex justify-center items-center w-[100%]"
                style={{
                    background: 'linear-gradient(90deg, #0875dc, #0cbaef)',
                }}
            >
                <div
                    className="flex flex-col justify-start items-center w-[98%] min-h-[100vh] py-5 bg-[transperent]"
                    style={{ overflow: 'hidden' }}
                >
                    {/* banner */}
                    <div className="flex flex-col justify-start items-center w-[100%] h-[30vh] md:h-[60vh] py-0 md:py-5 relative z-[100] rounded-[10px]">
                        <div className="flex justify-between items-center w-[90%] md:px-10">
                            <div className="flex justify-center items-center text-[#000029]">
                                <Link to="/">Logo</Link>
                            </div>
                            <ul className="flex justify-center items-center">
                                <li className="flex justify-center items-center mx-2 text-[#000029]">
                                    <i className="fa fa-user mr-1 text-[#fff]"></i>
                                    <p className="">Sign Up</p>
                                </li>
                                <li className="flex justify-center items-center mx-2 text-[#000029]">
                                    <i className="fa fa-key mr-1 text-[#fff]"></i>
                                    <p className="">Login</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-start items-center mt-10 md:leading-[60px] leading-8">
                            <h1
                                className="text-[#000029] md:text-[68px] text-[38px] font-[800] my-1 font-type"
                                style={{
                                    textShadow: '0px 0px 4px rgba(0,0,0,0.5)',
                                }}
                            >
                                Welcome<span className="text-[#fff]">!</span>
                            </h1>
                            <h1
                                className="text-[#000029] md:text-[#fff] md:text-[38px] text-[18px] font-[600]"
                                style={{
                                    textShadow: '0px 0px 4px rgba(0,0,0,0.4)',
                                }}
                            >
                                Lets get
                            </h1>
                        </div>
                    </div>
                    {/* form */}
                    <div className="flex justify-center items-center md:w-[55%] w-full bg-[transperent] relative z-[110] mt-[-12%] p-3 max-h-[]">
                        <form className="flex flex-col justify-center items-center w-full">
                            <ul className="flex flex-col justify-center items-center w-full p-2 my-2">
                                <li className="flex justify-between items-center w-full ">
                                    <h2 className="text-[#141727bb] font-type text-[16.5px] tracking-wide font-[550] w-full">
                                        Institute Details
                                    </h2>
                                </li>

                                <li className="flex justify-between items-center w-full ">
                                    <input
                                        type="text"
                                        id="instituteName"
                                        placeholder="Institute Name"
                                        className="text-[#141727bb] w-full rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-center w-full">
                                    <input
                                        type="text"
                                        id="instituteAddress"
                                        placeholder="Institute Address"
                                        className="w-full md:w-[64%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="institutePincode"
                                        placeholder="Institute Pincode"
                                        className="w-full md:w-[33%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex justify-between items-center w-full">
                                    <input
                                        type="text"
                                        id="instituteCity"
                                        placeholder="Institute City"
                                        className="w-[48%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="instituteState"
                                        placeholder="Institute State"
                                        className="w-[49%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex justify-between items-center w-full">
                                    <input
                                        type="text"
                                        id="ffiliatingUniversity"
                                        placeholder="Affiliating University"
                                        className="w-full rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-center w-full">
                                    <input
                                        type="text"
                                        id="yearOfEstablishment"
                                        placeholder="Year Of Establishment"
                                        className="w-full md:w-[33%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="instituteContactNumber"
                                        placeholder="Institute Contact Number"
                                        className="w-full md:w-[64%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex justify-between items-center w-full">
                                    <input
                                        type="text"
                                        id="instituteEmail"
                                        placeholder="Institute Email"
                                        className="w-full rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>
                            </ul>

                            <ul className="flex flex-col justify-center items-center w-full p-2 my-2">
                                <li className="flex justify-between items-center w-full">
                                    <h2 className="text-[#141727bb] font-type text-[16.5px] tracking-wide font-[550] w-full">
                                        Institute Profile
                                    </h2>
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-center w-full py-2">
                                    <div className="flex justify-center items-center w-full md:w-[32%] h-[150px] md:h-[220px]">
                                        <ul className="flex flex-col justify-center items-center p-10 rounded-lg w-[80%] md:w-full h-[150px] md:h-full border-[1px] border-dashed md:border-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.3)]">
                                            <li className="flex justify-between items-center pb-1">
                                                <i className="fa fa-user mr-1 text-[#000029] text-[28px] "></i>
                                            </li>
                                            <li className="flex text-[15px] justify-between items-center pb-1">
                                                Upload your Photo
                                            </li>
                                            <li className="flex justify-between items-center text-[#67748e] pb-1">
                                                <input
                                                    type="file"
                                                    id="PhotoUpload"
                                                    placeholder="Upload Profile Photo"
                                                    className=" hidden w-0 h-0 overflow-hidden"
                                                />
                                                <label
                                                    htmlFor="PhotoUpload"
                                                    className="text-[#fff] md:text-[#67748e] text-[13px] font-[700] rounded-[30px] px-10 py-2 PhotoUploadLabel border-[1px] border-dashed md:border-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.3)]"
                                                >
                                                    UPLOAD
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between items-center w-full md:w-[65%] h-full">
                                        <ul className="flex flex-col md:flex-row justify-center items-center rounded-lg w-[80%] md:w-full md:h-[100px] h-[150px] border-[1px] border-dashed md:border-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.3)] my-2">
                                            <li className="flex justify-between items-center pb-1 mx-1">
                                                <i className="fa fa-user mr-1 text-[#000029] text-[28px] "></i>
                                            </li>
                                            <li className="flex text-[15px] justify-between items-center pb-1 mx-1">
                                                Upload your Photo
                                            </li>
                                            <li className="flex justify-between items-center text-[#67748e] pb-1 mx-1">
                                                <input
                                                    type="file"
                                                    id="PhotoUpload"
                                                    placeholder="Upload Profile Photo"
                                                    className=" hidden w-0 h-0 overflow-hidden"
                                                />
                                                <label
                                                    htmlFor="PhotoUpload"
                                                    className="text-[#fff] md:text-[#67748e] text-[13px] font-[700] rounded-[30px] px-10 py-2 PhotoUploadLabel border-[1px] border-dashed md:border-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.3)]"
                                                >
                                                    UPLOAD
                                                </label>
                                            </li>
                                        </ul>

                                        <ul className="flex justify-start items-center rounded-lg w-full my-2">
                                            <textarea
                                                id="instituteBio"
                                                placeholder="Institute Bio"
                                                className="w-full h-[100px] px-3 py-2 rounded-lg hoverOutlineBlue"
                                            ></textarea>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <ul className="flex flex-col justify-center items-center w-full p-2 my-2">
                                <li className="flex justify-between items-center w-full ">
                                    <h2 className="text-[#141727bb] font-type text-[16.5px] tracking-wide font-[550] w-full">
                                        Faculty Coordinator Details
                                    </h2>
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-center w-full ">
                                    <input
                                        type="text"
                                        id="facultyName"
                                        placeholder="Name"
                                        className="w-full md:w-[66%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="contactNumber"
                                        placeholder="Contact Number"
                                        className="w-full md:w-[31%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-center w-full">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-full md:w-[66%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="dateOfBirth"
                                        placeholder="Date Of Birth"
                                        className="w-full md:w-[31%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-center w-full">
                                    <input
                                        type="text"
                                        id="houseNumber"
                                        placeholder="House Number"
                                        className="w-full md:w-[31%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="streetAddress"
                                        placeholder="Street Address"
                                        className="w-full md:w-[66%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex justify-between items-center w-full">
                                    <input
                                        type="text"
                                        id="nearBy"
                                        placeholder="Near By"
                                        className="w-[49%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="instituteEmail"
                                        placeholder="Institute Email"
                                        className="w-[48%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex justify-between items-center w-full">
                                    <input
                                        type="text"
                                        id="city"
                                        placeholder="City"
                                        className="w-[49%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="state"
                                        placeholder="State"
                                        className="w-[48%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex flex-col justify-between items-center w-full rounded-lg">
                                    <p className="text-[14px] text-[#141727bb] md:text-[#67748e] w-full my-1">
                                        Identity Proof
                                    </p>
                                    <div className="w-full rounded-lg px-3 hoverOutlineBlue">
                                        <input
                                            type="file"
                                            className="text-[15px] text-[#141727bb] w-full my-2 identityProofInput"
                                        />
                                    </div>
                                </li>
                            </ul>

                            <ul className="flex flex-col justify-center items-center w-full p-2 my-2">
                                <li className="flex justify-between items-center w-full ">
                                    <h2 className="text-[#141727bb] font-type text-[16.5px] tracking-wide font-[550] w-full">
                                        Additional Details
                                    </h2>
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-center w-full ">
                                    <input
                                        type="text"
                                        id="directorName"
                                        placeholder="Director's Name"
                                        className="w-full md:w-[66%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />

                                    <input
                                        type="text"
                                        id="contactNumber"
                                        placeholder="Director's Contact Number"
                                        className="w-full md:w-[31%] rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex justify-between items-center w-full ">
                                    <input
                                        type="text"
                                        id="directorEmail"
                                        placeholder="Director's Email"
                                        className="w-full rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex justify-between items-center w-full ">
                                    <input
                                        type="text"
                                        id="instituteWebsiteLink"
                                        placeholder="Institute Website Link"
                                        className="w-full rounded-lg px-3 py-[6px] md:py-[8px] my-2 hoverOutlineBlue"
                                    />
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-center w-full">
                                    <div className="flex flex-col justify-between items-center w-full md:w-[48.5%] rounded-lg">
                                        <p className="text-[15px] text-[#141727bb] w-full">
                                            Academic Calendar
                                        </p>
                                        <div className="w-full rounded-lg px-3 hoverOutlineBlue">
                                            <input
                                                type="file"
                                                id="academicCalendar"
                                                className="text-[15px] text-[#141727bb] w-full my-2 identityProofInput"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between items-center w-full md:w-[48.5%] rounded-lg">
                                        <p className="text-[15px] text-[#141727bb] w-full">
                                            Courcses Offered
                                        </p>
                                        <div className="w-full rounded-lg px-3 hoverOutlineBlue">
                                            <input
                                                type="file"
                                                id="courcsesOffered"
                                                className="text-[15px] text-[#141727bb] w-full my-2 identityProofInput"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul className="flex flex-col justify-center items-center w-full p-2 my-2">
                                <li className="flex justify-between items-center w-full ">
                                    <h2 className="text-[#141727bb] font-type text-[16.5px] tracking-wide font-[550] w-full">
                                        TDX Cell
                                    </h2>
                                </li>

                                <li className="flex flex-col md:flex-row justify-between items-start w-full my-2">
                                    <div className="flex flex-col justify-between items-center w-full md:w-[64.5%] rounded-lg">
                                        <div className="w-full bg-[#ffffff] rounded-lg px-1 hoverOutlineBlue">
                                            <input
                                                type="text"
                                                id="cellName"
                                                placeholder="Cell Name"
                                                className="text-[15px] text-[#67748e] w-full py-2 rounded identityProofInput bg-[transperent]"
                                            />
                                        </div>
                                        <p className="text-[15px] text-[#000029] w-full my-2">
                                            Available
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="checkAvilBtn"
                                    >
                                        CHECK AVAILABILITY
                                    </button>
                                </li>

                                <ul className="flex flex-col justify-center items-center w-full p-2">
                                    <li className="flex justify-between items-center w-full my-1">
                                        <h2 className="text-[#ffffff] font-type text-[16px] font-bold tracking-wide font-[500] w-full">
                                            Select Departments for Cell
                                        </h2>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="softwareDevelopment"
                                                value="Software Development"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="softwareDevelopment"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="softwareDevelopment"
                                            className="ml-1 text-[#111]"
                                        >
                                            Software Development
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="webDevelopment"
                                                value="webDevelopment"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="webDevelopment"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="webDevelopment"
                                            className="ml-1 text-[#111]"
                                        >
                                            Web Development
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="appDevelopment"
                                                value="appDevelopment"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="appDevelopment"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="appDevelopment"
                                            className="ml-1 text-[#111]"
                                        >
                                            App Development
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="graphicDesigning"
                                                value="graphicDesigning"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="graphicDesigning"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="graphicDesigning"
                                            className="ml-1 text-[#111]"
                                        >
                                            Graphic Designing
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="videoCreation"
                                                value="videoCreation"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="videoCreation"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="videoCreation"
                                            className="ml-1 text-[#111]"
                                        >
                                            Video Creation
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="3DModelingAnimation"
                                                value="3DModelingAnimation"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="3DModelingAnimation"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="3DModelingAnimation"
                                            className="ml-1 text-[#111]"
                                        >
                                            3D Modeling & Animation
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="marketing"
                                                value="marketing"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="marketing"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="marketing"
                                            className="ml-1 text-[#111]"
                                        >
                                            Marketing
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="management"
                                                value="management"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="management"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="management"
                                            className="ml-1 text-[#111]"
                                        >
                                            Management
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="humanResource"
                                                value="humanResource"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="humanResource"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="humanResource"
                                            className="ml-1 text-[#111]"
                                        >
                                            Human Resource
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="corporateRelations"
                                                value="corporateRelations"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="corporateRelations"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="corporateRelations"
                                            className="ml-1 text-[#111]"
                                        >
                                            {' '}
                                            Corporate & Relations
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="mediaManagement"
                                                value="mediaManagement"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="mediaManagement"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="mediaManagement"
                                            className="ml-1 text-[#111]"
                                        >
                                            Media Management
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="publicRelations"
                                                value="publicRelations"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="publicRelations"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="publicRelations"
                                            className="ml-1 text-[#111]"
                                        >
                                            Public Relations
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="researchDevelopment"
                                                value="researchDevelopment"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="researchDevelopment"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="researchDevelopment"
                                            className="ml-1 text-[#111]"
                                        >
                                            Research & Development
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="businessDevelopment"
                                                value="businessDevelopment"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="businessDevelopment"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="businessDevelopment"
                                            className="ml-1 text-[#111]"
                                        >
                                            Business Development
                                        </p>
                                    </li>

                                    <li className="flex justify-start items-center w-full my-1">
                                        <div className="containerChBox">
                                            <input
                                                type="checkbox"
                                                id="contentCreation"
                                                value="contentCreation"
                                                className="mr-2 cellCheckBox"
                                            />
                                            <span className="checkMark"></span>
                                        </div>
                                        <label
                                            htmlFor="contentCreation"
                                            className="w-[20px] h-[20px] absolute mt-2 rounded cursor-pointer"
                                        ></label>
                                        <p
                                            htmlFor="contentCreation"
                                            className="ml-1 text-[#111]"
                                        >
                                            Content Creation
                                        </p>
                                    </li>
                                </ul>
                            </ul>

                            <div className="flex flex-col justify-center items-center w-full p-2 my-2 translate-y-[40%]">
                                <button
                                    type="button"
                                    onClick={registerForm}
                                    className="text-[#ffffff] text-[13px] font-[700] w-full rounded-lg py-[10px] RegInstBtn"
                                >
                                    REGISTER INSTITUTE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="ShapBox w-[100%] overflow-hidden">
                    <span className="whiteBoxShap1"></span>

                    <span className="tallBoxShap2"></span>

                    <span
                        className="bg-[#0875dcaa] w-[900px] h-[900px] absolute top-0 right-0"
                        style={{
                            transform:
                                'rotate(45deg) translateY(-400px) translateX(-400px)',
                            borderRadius: '50px',
                            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    ></span>

                    <span
                        className="bg-[#0875dcaa] w-[1200px] h-[1200px] absolute right-0 top-[300vh]"
                        style={{
                            transform:
                                'rotate(45deg) translateY(-400px) translateX(100px)',
                            borderRadius: '90px',
                            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    ></span>
                </div>
            </section>
        </>
    )
}
