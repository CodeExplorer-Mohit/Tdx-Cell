import './FifthSection.css'

export default function () {
    return (
        <>
            <img src="top_cut.png" />
            <section className="flex justify-center items-center bg-gradient-to-r from-[#0875dc] to-[#0cbaef] relative z-[100] ">
                <div className="flex md:flex-row flex-col-reverse justify-center items-center md:w-[80%] w-[90%] md:h-[50vh]">
                    <div className="flex flex-col justify-center items-center md:w-[60%] w-full">
                        <h2 className="text-[#ffffff] md:text-[3.5rem] text-[2.5rem] font-bold">
                            CityMap App
                        </h2>
                        <span className="bg-[#ffffff55] px-5 py-[2px] rounded-md mb-3"></span>
                        <p className="text-center text-[#ffffff] my-3 md:w-[75%] w-full">
                            Download Healthcare Startup free Landing Page for
                            free. A freebie landing page for a one-stop
                            healthcare solution virtuality. Elegant and clean
                            landing page design for Figma. A useful design
                            concept.
                        </p>
                        <div className="flex justify-between items-center my-3 md:w-[55%] w-full py-5">
                            <button className="flex justify-center items-center bg-[#0cbaef] shadow-lg mx-2 px-11 py-3 rounded-[20px] text-[#fff] font-bold hover:bg-[#fff] hover:text-[#222] duration-300">
                                Button2
                            </button>
                            <button className="flex justify-center items-center bg-[#FFFFFF] shadow-lg mx-2 px-11 py-3 rounded-[20px] text-[#111111] font-bold px-10 py-20px] text-[#0cbaef] font-bold BTN1">
                                Button1
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center md:w-[50%] py-5">
                        <div className="flex justify-center items-center w-full mx-5">
                            <img
                                src="fifthSectionImg_prev_ui.png"
                                className=" w-[500px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <img src="bottom_cut.png" className="translate-y-[-25%]" />
        </>
    )
}
