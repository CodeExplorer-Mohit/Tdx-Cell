import React from 'react'
import './LandingSection.css'

export default function () {
    //   const landingImgBG = {
    //     backgroundImage: "url('landingPageBG.png')",
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //   }
    return (
        <>
            <section className="flex flex-col justify-center items-center w-[100%] md:mt-[10vh]">
                <div className="flex justify-center items-end w-[100%] relative landingBGColor">
                    <div className="flex md:flex-row flex-col justify-center items-center md:w-[80%] w-[90%] h-[55vh]">
                        <div className="flex flex-col justify-center md:items-start items-center md:w-1/2 w-full">
                            <h2 className="md:text-left text-center leading-[46px] my-5 leading-[40px]">
                                <span
                                    className="text-[#fff] text-[2rem] md:text-[4rem] font-bold tracking-[1px] mt-5 mb-3"
                                    style={{
                                        textShadow: '0 0 4px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    TDX-Cell
                                </span>
                                <span className="text-[#fff] text-[2rem] md:text-[3.5rem] font-bold tracking-[1px]">
                                    <span className=""> Training</span> And
                                    <span className=""> Development</span>{' '}
                                    Execution
                                </span>
                            </h2>

                            <div className="flex justify-between items-center w-[80%] h-[50px] bg-[#fff] rounded-[30px] pl-2 pr-[7px] my-5 shadow-md">
                                <input
                                    type="search"
                                    className="w-[85%] focus:outline-none px-3 text-[#7a94a7] font-[650]"
                                    placeholder="search here"
                                />
                                <button className="bg-[#0875dc] h-[40px] rounded-[30px] w-[15%]">
                                    <i className="flex justify-center items-center fa fa-search text-[#fff] text-[20px]"></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center items-center px-5 w-1/2">
                            <div className="flex justify-center items-center my-5">
                                <img src="" className="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full header">
                    <div className="bg-gradient-to-r from-[#0875dc] to-[#0cbaef]">
                        <svg
                            className="waves"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28"
                            preserveAspectRatio="none"
                            shape-rendering="auto"
                        >
                            <defs>
                                <path
                                    id="gentle-wave"
                                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                />
                            </defs>
                            <g className="parallax">
                                {/* <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(229, 230, 236, 0.333)" /> */}
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="3"
                                    fill="rgba(255,255,255,0.5)"
                                />
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="5"
                                    fill="rgba(255,255,255,0.3)"
                                />
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="7"
                                    fill="#0cbaef12"
                                    // fill="rgba(229, 230, 236, 0.33)"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}
