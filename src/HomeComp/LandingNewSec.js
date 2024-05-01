import React, { useEffect, useRef } from "react";
import './LandingNewSec.css';

export default function(){
    let pageTop = 0;
    document.addEventListener("scroll",(event)=>{
        // console.log(window.visualViewport);
        // pageTop = window.visualViewport.pageTop;
        // console.log(pageTop);
        // if(pageTop<=146){
        //     document.getElementById('boxRotateId').style.transform="rotate("+ (35+pageTop)/2     +"deg)";

        //     document.getElementById('ylwCircleMove').style.bottom="200px";
        //     document.getElementById('ylwCircleMove').style.left="5px";

        //     document.getElementById('grnCircleMove').style.bottom="200px";
        //     document.getElementById('grnCircleMove').style.right="5px";
        // }
        // if(pageTop>146){
        //     document.getElementById('ylwCircleMove').style.bottom=""+(pageTop+58)+"px";
        //     document.getElementById('ylwCircleMove').style.left=""+(pageTop-140)+"px";
            
        //     document.getElementById('grnCircleMove').style.bottom=""+(pageTop+58)+"px";
        //     document.getElementById('grnCircleMove').style.right=""+(pageTop-140)+"px";
        // }

        // if(pageTop<339){
        //     document.getElementById('ylwCircleMove').style.animation="";
        //     document.getElementById('grnCircleMove').style.animation="";

        //     document.getElementById('ylwCircleMove').style.backgroundColor="";
        //     document.getElementById('grnCircleMove').style.backgroundColor="";
        // }

        // if(pageTop>339){
        //     document.getElementById('ylwCircleMove').style.animation="ripple 0.7s infinite linear";
        //     document.getElementById('grnCircleMove').style.animation="ripple 0.7s infinite linear";
        //     document.getElementById('ylwCircleMove').style.backgroundColor="#ffffff";
        //     document.getElementById('grnCircleMove').style.backgroundColor="#ffffff";
        // }
        
    });
    
    return(
        <>
            <section className="flex justify-center items-center bg-[#f5f6f8]" id="myId">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center w-[90%] md:w-[80%] min-h-[90vh]">

                    <div className="flex justify-center items-center w-full md:w-1/2 md:mt-10 md:mt-0">
                        <div className="flex justify-center items-center">
                            <p className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                                <h2 className="md:text-left text-center leading-[40px]">
                                    <span className="text-[#0a9be7] text-[32px] md:text-[4rem] font-bold tracking-[1px]">TDX-Cell</span>
                                    <span className="text-[#000029] text-[32px] md:text-[3.5rem] font-bold tracking-[1px]">
                                        <span className=""> Training</span> And 
                                        <span className=""> Development</span> Execution
                                    </span>
                                </h2>
                                <h3 className="md:text-left text-center text-[#303030] text-[2rem] font-[600] my-2">Lorem Ipsum Lets Grow</h3>
                                <p className='md:text-left text-center text-[#4f4f4f] w-[90%] md:w-[75%] my-2'>
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful.
                                </p>
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full md:w-1/2">
                        <div className="flex justify-center items-center w-full h-[450px] relative z-[105]">
                            <div className="flex justify-center items-center w-[450px] h-[450px] rounded-full relative z-[100] bg-[ligtblue] YlwGrnCircleBox" id="boxRotateId">
                                <div className="w-[50px] h-[50px] bg-[#0a9be7] rounded-full absolute z-[110] ylwCircle"></div>
                                <div className="w-[50px] h-[50px] bg-[#0a9be7] rounded-full absolute z-[110] grnCircle"></div>

                                <div className="w-[50px] h-[50px] bg-[#000047] rounded-full absolute ylwCircle" id="ylwCircleMove"></div>
                                <div className="w-[50px] h-[50px] bg-[#000047] rounded-full absolute grnCircle" id="grnCircleMove"></div>
                            </div>
                                <img src="dots_image.png" className="w-[250px] md:w-[400px] absolute dotImageRotateAnime" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}