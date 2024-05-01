import { IoMdRibbon } from 'react-icons/io'

const ClubsCard = () => {
    const GiLightBulb = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
        </svg>
    )
    return (
        <div
            className={`flex justify-center items-center w-[280px] relative my-6 mx-3 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-t-[4px]  hover:translate-y-[-1%] duration-200 cursor-pointer group`}
        >
            <div className="bg-[#C6ECF8] w-[85%] h-[30px] rounded-[3px] absolute top-[-18px] left-[7.5%] z-[1]"></div>
            <div className="bg-[#87DAF5] w-[90%] h-[30px] rounded-[3px] absolute top-[-12px] left-[5%] z-[2]"></div>
            <div className="bg-[#56CAEEEE] w-[95%] h-[30px] rounded-[3px] absolute top-[-6px] left-[2.5%] z-[3]"></div>
            <div className="flex flex-col justify-center items-center border-t-[11px] border-[#0CB9EF] bg-[#FFFFFF] p-3 w-full rounded-t-[4px] relative z-[4] top-0">
                <div
                    className={`flex justify-center items-center w-full h-[150px] border-b-[1.5px] before:content-[''] before:absolute before:top-0 before:right-3 before:h-[32px] before:w-[30px] before:bg-[#0CB9EF] before:rounded-b-[20px] before:text-center before:text-[#FFFFFF]`}
                >
                    <h2 className="text-[1.25rem] text-[#2E475D] font-[700] w-full">
                        Developing Scalable HubSpot Solutions
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-start w-full px-2 py-3">
                    <div className="flex justify-between items-center w-full ">
                        <div className="flex flex-col justify-center items-start w-[85%]">
                            <p className="text-[#2E475D] text-[.7rem] font-[750] w-full my-1">
                                SHORT COURSE
                            </p>
                            <p className="text-[#2E475D] text-[.73rem] font-[700] my-1">
                                2 lessons{' '}
                                <span className="text-[#F2D34B]">
                                    1:22 hours
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-center items-center w-[16%]">
                            <IoMdRibbon className="text-[3rem] text-[#3e5974]" />
                        </div>
                    </div>
                    <p className="text-[#2E475D] text-[.78rem] my-3">
                        Learn how to use WhatsApp for your marketing, sales, and
                        service strategies...{' '}
                        <span className="text-[#F2D34B] text-[.8rem] font-[700]">
                            Read more
                        </span>
                    </p>
                </div>
                <div className="flex justify-center items-center w-full">
                    <button className="text-[.9rem] bg-[#0CB9EF] group-hover:bg-[#0875DC] duration-700 text-[#FFFFFF] font-[700] py-3 px-4 w-[100%] rounded-[4px]">
                        Join Club
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClubsCard
