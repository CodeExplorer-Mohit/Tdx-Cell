import { SiOpenbadges } from 'react-icons/si'
import { GiPoliceBadge } from 'react-icons/gi'
import { FaBasketballBall } from 'react-icons/fa'
import { FaDharmachakra } from 'react-icons/fa'
import { FaDiceD20 } from 'react-icons/fa'
import { ImSvg } from 'react-icons/im'
import styles from './Clubs.module.css'

const Banner = () => {
    return (
        <div className="flex justify-center items-center w-[100%] h-[38vh] bg-[#0CB9EF] relative overflow-hidden">
            <div
                className={`flex flex-col justify-center items-center h-full ml-[30%] absolute ${styles.iconsEffect}`}
            >
                <SiOpenbadges className="text-[6rem] text-[#0CB9EF44] absolute top-[0] right-[30%] " />
                <GiPoliceBadge className="text-[6rem] text-[#0CB9EF44] absolute top-[50%] left-[-50%] " />
                <FaBasketballBall className="text-[6rem] text-[#0CB9EF44] absolute top-[90%] left-[50%]" />
                <FaDharmachakra className="text-[6rem] text-[#0CB9EF44] absolute top-[130%] left-[] " />
                <FaDiceD20 className="text-[6rem] text-[#0CB9EF44] absolute top-[-90%] left-[-40%]" />
                <ImSvg className="text-[6rem] text-[#0CB9EF44] absolute top-[-40%] left-[] " />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-[#2E475D] text-[.9rem] font-[550] bg-[#FFFFFF] rounded-[50px] px-4 py-1 my-2">
                    Completely Free & Online
                </div>
                <h2 className="text-[#2E475D] text-[1.6rem] font-[800] my-2">
                    Join Different Clubs & Goals.
                </h2>
                <p className="text-[#2E475D] text-[1.25rem] my-2">
                    Students can select the club of their choice and join it.
                </p>
            </div>
        </div>
    )
}

export default Banner
