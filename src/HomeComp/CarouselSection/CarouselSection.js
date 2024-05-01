import { useState } from 'react'
import CarouselItems from './CarouselItems'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import { act } from 'react-dom/test-utils'

export default function () {
    const [items, setItems] = useState([
        {
            id: '1',
            title: 'Heading No. 1',
            userImg: require('./userImages/userPic_1.png'),
            userName: 'user Name 1',
            userInfo: 'user info 1',
            discription:
                'Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free.Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free 1',
        },
        {
            id: '2',
            title: 'Heading No. 2',
            userImg: require('./userImages/userPic_1.png'),
            userName: 'user Name 2',
            userInfo: 'user info 2',
            discription:
                'Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free.Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free 2',
        },
        {
            id: '3',
            title: 'Heading No. 3',
            userImg: require('./userImages/userPic_1.png'),
            userName: 'user Name 3',
            userInfo: 'user info 3',
            discription:
                'Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free.Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free 3',
        },
        {
            id: '4',
            title: 'Heading No. 4',
            userImg: require('./userImages/userPic_1.png'),
            userName: 'user Name 4',
            userInfo: 'user info 4',
            discription:
                'Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free.Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free 4',
        },
        {
            id: '5',
            title: 'Heading No. 5',
            userImg: require('./userImages/userPic_1.png'),
            userName: 'user Name 5',
            userInfo: 'user info 5',
            discription:
                'Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free.Download Healthcare Startup free Landing Page for free Download Healthcare Startup free Landing Page for free 5',
        },
    ])

    const [activeIndex, setActiveIndex] = useState(0)

    const slideLeft = () => {
        if (activeIndex === 0) {
            setActiveIndex(items.length - 1)
        } else {
            setActiveIndex(activeIndex - 1)
        }
    }

    const slideRight = () => {
        if (activeIndex === items.length - 1) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndex + 1)
        }
    }

    return (
        <div className="flex justify-center items-center bg-[#f5f6f8] group">
            <section className="flex flex-col justify-center items-center w-[70%] mx-auto relative overflow-hidden mt-[10%] rounded-[20px] bg-gradient-to-t from-[#0875dc] to-[#0cbaef] relative">
                <div
                    className="justify-center items-center w-full h-full w-full rounded-[20px]"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                        display: '-webkit-box',
                        transition: 'transform 0.3s',
                    }}
                >
                    {items.map((item) => (
                        <CarouselItems item={item} />
                    ))}
                </div>

                <div className="flex justify-center items-center py-3 ">
                    {items.map((item, index) => {
                        return (
                            <button
                                onClick={() => {
                                    setActiveIndex(index)
                                }}
                                className={` ${
                                    index === activeIndex
                                        ? 'bg-[#fff] h-[12px] w-[12px]'
                                        : 'bg-[#aaa] h-[9px] w-[9px]'
                                } mx-[2px] rounded-full`}
                            ></button>
                        )
                    })}
                </div>

                <button
                    onClick={() => {
                        slideLeft()
                    }}
                    className="border rounded-full p-1 group-hover:block transition duration-300 hidden absolute left-5"
                >
                    <FaArrowLeft className="text-[#fff]" />
                </button>
                <button
                    onClick={() => {
                        slideRight()
                    }}
                    className="border rounded-full p-1 group-hover:block transition duration-300 hidden absolute right-5"
                >
                    <FaArrowRight className="text-[#fff]" />
                </button>
            </section>
        </div>
    )
}

{
    /* <section className='flex justify-center items-center pt-10 w-full'>
    <div className='flex flex-col justify-center items-center w-[70%] h-[55vh] rounded-[20px] mt-10 overflow-hidden'>
        
        <div className='flex flex-col justify-center items-center w-[100%] h-full rounded-[20px] bg-gradient-to-t from-[#0875dc] to-[#0cbaef]'>

                <div className='flex flex-col justify-center items-center my-10'>
                    <h2 className='text-[#ffffff] text-[32px] font-bold my-1'>{}</h2>
                    <p className='w-[50px] py-[3px] bg-[#ffffff55] my-1 rounded-lg'></p>
                </div>
                <div className='flex justify-center items-start mt-5 px-4 my-10 w-[80%]'>
                    <div className='flex justify-center items-center w-1/2 '>
                        <ul className='flex justify-center items-center w-full'>
                            <li className='mx-2'>
                                <img src='profile_Pic.png' className='p-1 w-[80px] h-[80px] rounded-full' style={{border:"3px solid #ffffffaa"}} />
                            </li>
                            <li className='mx-2'>
                                <h3 className='text-[#eeeeee] text-[20px] font-bold'>Lorem Ipsum</h3>
                                <p className='text-[.8rem] text-[#ffffffcc]'>Find the below information.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center w-1/2 '>
                        <p className='text-[#ffffffcc] px-2 w-[100%]'>
                            Download Healthcare Startup free Landing Page for free.
                        </p>
                    </div>
                </div>
            
        </div>

    </div>
</section> */
}

{
    /* <div className='flex justify-center items-center my-2'>
        <ul className='flex justify-center items-center'>
            <li className='flex justify-center items-center w-[9px] h-[9px] bg-[#13aaf4] rounded-full mx-1'></li>
            <li className='flex justify-center items-center w-[9px] h-[9px] bg-[#67748e55] rounded-full mx-1'></li>
            <li className='flex justify-center items-center w-[9px] h-[9px] bg-[#67748e55] rounded-full mx-1'></li>
            <li className='flex justify-center items-center w-[9px] h-[9px] bg-[#67748e55] rounded-full mx-1'></li>
            <li className='flex justify-center items-center w-[9px] h-[9px] bg-[#67748e55] rounded-full mx-1'></li>
        </ul>
    </div> */
}
