import React from "react";
import './sectionBrand.css'

export default function(){
    return(
        <section className="flex justify-center items-center bg-[#e1e6ff]">
            <div className="flex flex-col justify-start items-center w-[90%] md:w-[80%] min-h-[100vh] py-10">

                <div className="flex justify-center items-center my-5">
                    <h2 className="text-[#2e2e2e] font-bold text-[32px]">Brands</h2>
                </div>

                <div className="flex justify-center items-start w-full mt-10">
                    <ul className="flex flex-col md:flex-row justify-between items-center w-full">

                        <li className="flex flex-col justify-start items-center shadow-md w-[80%] md:h-[350px] w-full md:w-[20%] hover:shadow-xl md:my-[] my-8 rounded bg-[#f7f7f7] py-5 tilesClass">
                            <img src="tdpvista_tiles.png" className="w-[100px] md:w-[120px] mb-5" />
                            <h3 className="text-[20px] font-[600] text-[#3f3f3f] mt-[30px] mb-2">TDPVista Tiles</h3>
                            <p className="text-center  md:w-[80%] mt-2 px-5 md:px-0">TDPVista TILES is a platform.</p>
                            <button className="my-4">visit</button>
                        </li>

                        <li className="flex flex-col justify-start items-center shadow-md w-[80%] md:h-[350px] w-full md:w-[20%] hover:shadow-xl md:my-[] my-8 rounded bg-[#f7f7f7] py-5 studiosClass">
                            <img src="tdpvista_studios.png" className="w-[100px] md:w-[120px] mb-5" />
                            <h3 className="text-[20px] font-[600] text-[#3f3f3f] mt-[20px] mb-2">TDPVista Studios</h3>
                            <p className="text-center md:w-[80%] mt-2 px-5 md:px-0">TDPVista Studios is a creative cultural platform.</p>
                            <button className="my-4">visit</button>
                        </li>

                        <li className="flex flex-col justify-start items-center shadow-md w-[80%] md:h-[350px] w-full md:w-[20%] hover:shadow-xl md:my-[] my-8 rounded bg-[#f7f7f7] py-5 accrescenceClass">
                            <img src="Accrescencelogo.png" className="w-[100px] md:w-[120px] mt-8 mb-5" />
                            <h3 className="text-[20px] font-[600] text-[#3f3f3f] mt-[30px] mb-2">Accrescence</h3>
                            <p className="text-center md:w-[80%] mt-2 px-5 md:px-0">Accrescence is a TDPVista creation.</p>
                            <button className="my-4">visit</button>
                        </li>

                        <li className="flex flex-col justify-start items-center shadow-md w-[80%] md:h-[350px] w-[90%] w-full md:w-[20%] hover:shadow-xl md:my-[] my-8 rounded bg-[#f7f7f7] py-5 visziClass">
                            <img src="viszi.png" className="w-[80px] md:w-[80px] mb-5" />
                            <h3 className="text-[20px] font-[600] text-[#3f3f3f] my-2">Viszi</h3>
                            <p className="text-center md:w-[80%] my-2 px-5 md:px-0">Viszi is an academic media platform.</p>
                            <button className="my-4">visit</button>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}