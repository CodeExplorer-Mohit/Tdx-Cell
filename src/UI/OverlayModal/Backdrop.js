import Ovelay from './Overlay'
import { GrFormClose } from 'react-icons/gr'
const Backdrop = (props) => {
    return (
        <div className="fixed top-auto left-auto z-[20] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <button
                onClick={props.videoViewHandler}
                className="absolute top-[-8%] right-[-1%]"
            >
                <GrFormClose className="text-[34px] font-[700]" />
            </button>
            <iframe
                width="780"
                height="415"
                src={props.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    )
}

export default Backdrop
