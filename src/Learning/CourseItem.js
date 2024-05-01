import { useState } from 'react'
import Backdrop from '../UI/OverlayModal/Backdrop'
import Overlay from '../UI/OverlayModal/Overlay'
import cardItem from './imgs/cardItem.jpg'
import { ImPlay3 } from 'react-icons/im'

const CourseItem = (props) => {
    const [videoView, setVideoView] = useState(false)
    const videoClose = () => {
        setVideoView(false)
    }
    const videoViewOnHandler = () => {
        setVideoView(true)
    }
    return (
        <>
            <div className="flex justify-center items-center w-[90%] rounded-[10px] p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-[#FFFFFF] m-5">
                <div className="flex flex-col justify-center items-start w-1/2 pl-8 py-10">
                    <h2 className="text-[5rem] font-[700] text-transparent bg-clip-text bg-gradient-to-r from-[#0cbaef] to-[#0875dc] ">
                        {props.title}
                    </h2>
                    <p className="inline text-[#6D7C90] text-[1.13rem] leading-[28px] mt-2 mb-5">
                        The most popular premium WordPress theme
                        <span className="text-[#222222] font-[550] mx-1">
                            in the world
                        </span>
                        (stats from BuiltWith.com) and the most powerful theme
                        in our collection, including the{' '}
                        <span className="text-[#222222] font-[550] mx-1">
                            visual drag & drop Divi page builder.
                        </span>
                    </p>
                    <button className="rounded-[25px] text-[#FFFFFF] bg-gradient-to-r from-[#0cbaef] to-[#0875dc] font-[700] my-5 px-7 py-3">
                        {props.btnText}
                    </button>
                </div>
                <div className="flex justify-center items-center w-1/2 mx-10">
                    <div className="flex justify-center items-center w-[360px] py-10 h-[360px] relative">
                        <img
                            src={cardItem}
                            className="w-[360px] absolute top-0 left-0"
                        />
                        <div className="flex justify-center items-center w-[134px] h-[134px] rounded-full bg-[rgba(255,255,255,0.2)] absolute left-auto top-auto shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:h-[120px] hover:w-[120px] duration-300">
                            <div className="flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#fff] absolute left-auto top-auto hover:h-[134px] hover:w-[134px] duration-300 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
                                <button
                                    onClick={videoViewOnHandler}
                                    className="flex justify-center items-center ml-2"
                                >
                                    <ImPlay3 className="text-[40px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {videoView ? (
                <Overlay>
                    <Backdrop
                        videoViewHandler={videoClose}
                        link={props.videoLink}
                    />
                </Overlay>
            ) : (
                ''
            )}
        </>
    )
}

export default CourseItem
