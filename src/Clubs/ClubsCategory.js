import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const ClubsCategory = () => {
    return (
        <div className="flex justify-center items-center w-[280px] bg-[#0CB9EF] rounded-[10px] p-3 m-3 shadow-[0_0_10px_rgba(0,0,0,0.1)] relatvie group">
            <span className="w-full h-[100%] top-0 left-0 absolute translate-y-[-100%]  group-hover:translate-x-[5%] duration-100 bg-[red]"></span>
            <div className="flex flex-col justify-center items-start">
                <h2 className="text-[2rem] text-[#2E475D] font-[900]">
                    Technology
                </h2>
                <p className="text-[#2E475D] ">
                    Levrage the <br /> power of code
                </p>
            </div>
            <HiOutlineArrowNarrowRight className="text-[#2E475D] text-[2rem] w-full group-hover:translate-x-[8%] duration-100" />
        </div>
    )
}

export default ClubsCategory
