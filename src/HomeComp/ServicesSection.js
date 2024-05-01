import React from "react";
import './ServicesSection.css';

export default function ServicesSection(){
    return(
        <>
            <section className="flex justify-center items-center my-10 bg-[#f5f6f8]">
                <div className="flex flex-col justify-center items-center w-[80%] h-[100vh] bg-[] my-10 py-5">

                    <div className="flex flex-col justify-center items-center z-[20] relative mb-8">
                        <h2 className="text-[#424242] text-[36px] font-bold my-2">Brands</h2>
                        <span className="bg-[#42424255] px-5 py-[2px] rounded-md my-2"></span>
                        <p className="w-[80%] text-center text-[#545454] my-3">
                            Download Healthcare Startup free Landing Page for free. A freebie landing page for a one-stop healthcare solution virtuality. Elegant and clean landing page design for Figma. A useful design concept for your next project. Find the below information.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center relative w-[90%] my-8 z-[11]">
                        <img src="servicesBlobBg.png" className="z-[10] left-[-40%] absolute" />

                        <div className="flex flex-col justify-center items-start p-5 rounded-lg w-[30%] relative z-[20] my-4 mx-2 cardCssService">
                            <img src="research.png" className="w-[76px] my-2" />
                            <h3 className="text-[#424242] text-[] font-bold my-2">Search doctor</h3>
                            <p className="text-[] text-[] my-2">
                                A useful design concept for your next project.A useful design concept for your next project.A useful design concept for your next project.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-start p-5 rounded-lg w-[30%] relative z-[20] my-4 mx-2 cardCssService">
                            <img src="statutory.png" className="w-[76px] my-2" />
                            <h3 className="text-[#424242] text-[] font-bold my-2">Online pharmacy</h3>
                            <p className="text-[] text-[] my-2">
                                A useful design concept for your next project.A useful design concept for your next project.A useful design concept for your next project.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-start p-5 rounded-lg w-[30%] relative z-[20] my-4 mx-2 cardCssService">
                            <img src="document.png" className=" w-[76px] my-2" />
                            <h3 className="text-[#424242] text-[] font-bold my-2">Consultation</h3>
                            <p className="text-[] text-[] my-2">
                                A useful design concept for your next project.A useful design concept for your next project.A useful design concept for your next project.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-start p-5 rounded-lg w-[30%] relative z-[20] my-4 mx-2 cardCssService">
                            <img src="research.png" className="w-[76px] my-2" />
                            <h3 className="text-[#424242] text-[] font-bold my-2">Search doctor</h3>
                            <p className="text-[#67748e] my-2">
                                A useful design concept for your next project.A useful design concept for your next project.A useful design concept for your next project.
                            </p>
                        </div>

                        
                        <div className="flex flex-col justify-center items-start p-5 rounded-lg w-[30%] relative z-[20] my-4 mx-2 cardCssService">
                            <img src="statutory.png" className=" w-[76px] my-2" />
                            <h3 className="text-[#424242] font-bold my-2">Consultation</h3>
                            <p className="text-[#67748e] my-2">
                                A useful design concept for your next project.A useful design concept for your next project.A useful design concept for your next project.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-start p-5 rounded-lg w-[30%] relative z-[20] my-4 mx-2 cardCssService">
                            <img src="document.png" className=" w-[76px] my-2" />
                            <h3 className="text-[#424242] font-bold my-2">Consultation</h3>
                            <p className="text-[#67748e] my-2">
                                A useful design concept for your next project.A useful design concept for your next project.A useful design concept for your next project.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}