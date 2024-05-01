import React, { useState } from 'react'
import Header from '../HomeComp/Header'
import Footer from '../HomeComp/Footer'
import './Blog.css'
import './blog-banner-bg.jpg'

import blogSearchBarPic from './blogSearchBarPic.svg'
import bannerCard1 from './bannerCard-1.png'
import Card1 from './card-1.png'
import Card2 from './card-2.png'
import Card3 from './card-3.png'
import Card4 from './card-4.png'
import Card5 from './card-5.png'
import Card6 from './card-6.jpg'
import Card7 from './card-7.png'
import Card8 from './card-8.png'
import Card9 from './card-9.png'
import Card10 from './card-10.png'

import ProfilePic from './profile-Pic.webp'

export default function Blog() {
    const [searchVal, setSearchVal] = useState('')

    return (
        <>
            <Header />

            <section className="flex justify-center items-center md:w-[100%] my-[10vh]">
                <div className="flex flex-col justify-center items-center md:w-[90%]">
                    <div className="flex flex-col justify-center items-center pt-5 mt-10 w-[100%]">
                        <h2 className="text-center text-[46px] font-bold text-[#222222] tracking-[1px]">
                            Blog page
                        </h2>
                        <p className="text-[1.25rem] text-center text-[#5a5a5a] tracking-[normal] w-[60%] py-3">
                            In-depth design tutorials and the best quality
                            design and Figma assets curated by the team behind
                            Untitled UI.
                        </p>
                    </div>

                    <div
                        className="flex justify-start items-center w-full px-5 py-2 mt-10"
                        style={{
                            borderTop: '0px solid rgba(0,0,0,0.1)',
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                        }}
                    >
                        <button className="font-bold BlogMenuBTN">
                            Trending
                        </button>

                        <div
                            className="flex justify-center items-center mx-5 w-[238px] h-[35px] rounded-[50px]"
                            style={{
                                outline: '1px solid #333',
                                boxShadow:
                                    'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            }}
                        >
                            <input
                                type="search"
                                placeholder="Search"
                                className="w-[200px] h-[35px] px-3 focus:outline-none rounded-[50px]"
                            />
                            <button
                                className=" h-full bg-[#333] px-[12px] "
                                style={{ borderRadius: '0 50px 50px 0' }}
                            >
                                <i className="fa fa-search text-[#fff]"></i>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center w-full my-10 mx-5">
                        <div className="flex flex-col justify-center items-start w-[420px] my-10  imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card1} className="w-[420px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <p className="text-[#0cb9ef] tracking-[normal] my-2 font-[550]">
                                title
                            </p>
                            <p className="text-[#333] text-[1.25rem] font-[550] tracking-[.5px]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="text-[#475467] text-[1.05rem] tracking-[.1px] leading-[24px] mt-1 mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate debitis provident,
                                eveniet consectetur!Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Cupiditate debitis
                                provident, eveniet consectetur!.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <img
                                    src={ProfilePic}
                                    className="w-[50px] rounded-[50%] mr-2"
                                />
                                <p className="flex flex-col justify-center items-start ml-2">
                                    <p className="text-[#333] font-[550] text-[15px]">
                                        Writer Name
                                    </p>
                                    <p className="flex justify-center items-center text-[#475467] text-[16px]">
                                        Month dd, yyyy •{' '}
                                        <span className="text-[15px]">
                                            12 min read
                                        </span>
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start w-[420px] my-10  imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card2} className="w-[420px] " />
                                <div className="blogTransformBox bg-[#f6f6f8]">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateX(0px) ',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px)',
                                            border: '2px solid #f6f6f8',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <p className="text-[#0cb9ef] tracking-[normal] my-2 font-[550]">
                                title
                            </p>
                            <p className="text-[#333] text-[1.25rem] font-[550] tracking-[.5px]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="text-[#475467] text-[1.05rem] tracking-[.1px] leading-[24px] mt-1 mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate debitis provident,
                                eveniet consectetur!Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Cupiditate debitis
                                provident, eveniet consectetur!.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <img
                                    src={ProfilePic}
                                    className="w-[50px] rounded-[50%] mr-2"
                                />
                                <p className="flex flex-col justify-center items-start ml-2">
                                    <p className="text-[#333] font-[550] text-[15px]">
                                        Writer Name
                                    </p>
                                    <p className="flex justify-center items-center text-[#475467] text-[16px]">
                                        Month dd, yyyy •{' '}
                                        <span className="text-[15px]">
                                            12 min read
                                        </span>
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start w-[420px] my-10  imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card3} className="w-[420px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <p className="text-[#0cb9ef] tracking-[normal] my-2 font-[550]">
                                title
                            </p>
                            <p className="text-[#333] text-[1.25rem] font-[550] tracking-[.5px]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="text-[#475467] text-[1.05rem] tracking-[.1px] leading-[24px] mt-1 mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate debitis provident,
                                eveniet consectetur!Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Cupiditate debitis
                                provident, eveniet consectetur!.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <img
                                    src={ProfilePic}
                                    className="w-[50px] rounded-[50%] mr-2"
                                />
                                <p className="flex flex-col justify-center items-start ml-2">
                                    <p className="text-[#333] font-[550] text-[15px]">
                                        Writer Name
                                    </p>
                                    <p className="flex justify-center items-center text-[#475467] text-[16px]">
                                        Month dd, yyyy •{' '}
                                        <span className="text-[15px]">
                                            12 min read
                                        </span>
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start w-[420px] my-10  imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card4} className="w-[420px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <p className="text-[#0cb9ef] tracking-[normal] my-2 font-[550]">
                                title
                            </p>
                            <p className="text-[#333] text-[1.25rem] font-[550] tracking-[.5px]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="text-[#475467] text-[1.05rem] tracking-[.1px] leading-[24px] mt-1 mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate debitis provident,
                                eveniet consectetur!Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Cupiditate debitis
                                provident, eveniet consectetur!.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <img
                                    src={ProfilePic}
                                    className="w-[50px] rounded-[50%] mr-2"
                                />
                                <p className="flex flex-col justify-center items-start ml-2">
                                    <p className="text-[#333] font-[550] text-[15px]">
                                        Writer Name
                                    </p>
                                    <p className="flex justify-center items-center text-[#475467] text-[16px]">
                                        Month dd, yyyy •{' '}
                                        <span className="text-[15px]">
                                            12 min read
                                        </span>
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start w-[420px] my-10  imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card5} className="w-[420px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <p className="text-[#0cb9ef] tracking-[normal] my-2 font-[550]">
                                title
                            </p>
                            <p className="text-[#333] text-[1.25rem] font-[550] tracking-[.5px]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="text-[#475467] text-[1.05rem] tracking-[.1px] leading-[24px] mt-1 mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate debitis provident,
                                eveniet consectetur!Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Cupiditate debitis
                                provident, eveniet consectetur!.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <img
                                    src={ProfilePic}
                                    className="w-[50px] rounded-[50%] mr-2"
                                />
                                <p className="flex flex-col justify-center items-start ml-2">
                                    <p className="text-[#333] font-[550] text-[15px]">
                                        Writer Name
                                    </p>
                                    <p className="flex justify-center items-center text-[#475467] text-[16px]">
                                        Month dd, yyyy •{' '}
                                        <span className="text-[15px]">
                                            12 min read
                                        </span>
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start w-[420px] my-10  imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card6} className="w-[420px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <p className="text-[#0cb9ef] tracking-[normal] my-2 font-[550]">
                                title
                            </p>
                            <p className="text-[#333] text-[1.25rem] font-[550] tracking-[.5px]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="text-[#475467] text-[1.05rem] tracking-[.1px] leading-[24px] mt-1 mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate debitis provident,
                                eveniet consectetur!Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Cupiditate debitis
                                provident, eveniet consectetur!.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <img
                                    src={ProfilePic}
                                    className="w-[50px] rounded-[50%] mr-2"
                                />
                                <p className="flex flex-col justify-center items-start ml-2">
                                    <p className="text-[#333] font-[550] text-[15px]">
                                        Writer Name
                                    </p>
                                    <p className="flex justify-center items-center text-[#475467] text-[16px]">
                                        Month dd, yyyy •{' '}
                                        <span className="text-[15px]">
                                            12 min read
                                        </span>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center md:w-[100%] my-10 bg-[#333] py-3">
                <div className="flex justify-center items-center w-[80%]">
                    <ul className="flex justify-center items-center">
                        <li className="flex justify-center items-center mx-1 w-auto px-2">
                            <button className="px-8 w-auto py-[6px] rounded-[50px] blogCategoryBtn">
                                Home
                            </button>
                        </li>
                        <li className="flex justify-center items-center mx-1 w-auto px-2">
                            <button className="px-8 w-auto py-[6px] rounded-[50px] blogCategoryBtn">
                                General
                            </button>
                        </li>
                        <li className="flex justify-center items-center mx-1 w-auto px-2">
                            <button className="px-8 w-auto py-[6px] rounded-[50px] blogCategoryBtn">
                                Design Psychology
                            </button>
                        </li>
                        <li className="flex justify-center items-center mx-1 w-auto px-2">
                            <button className="px-8 w-auto py-[6px] rounded-[50px] blogCategoryBtn">
                                Technology
                            </button>
                        </li>
                        <li className="flex justify-center items-center mx-1 w-auto px-2">
                            <button className="px-8 w-auto py-[6px] rounded-[50px] blogCategoryBtn">
                                Neuromarketing
                            </button>
                        </li>
                        <li className="flex justify-center items-center mx-1 w-auto px-2">
                            <button className="px-8 w-auto py-[6px] rounded-[50px] blogCategoryBtn">
                                Resources
                            </button>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="flex justify-center items-center md:w-[100%] my-5">
                <div className="flex flex-col justify-center items-center md:w-[80%]">
                    <div className="flex flex-col justify-center items-center md:w-[80%] my-10 imgHoverEffect">
                        <div className="flex justify-center items-center">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={bannerCard1} className="w-[450px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start w-[60%]">
                                <p className="text-[#aaa] text-[18] font-[700] py-2">
                                    Design Psychology
                                </p>
                                <p className="leading-[50px] text-[#111] text-[42px] font-[700] py-2">
                                    The Lorem ipsum sit amet-consectetur elit.
                                </p>
                                <p
                                    className="text-[17px] #333 py-2"
                                    style={{ fontFamily: 'serif' }}
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cupiditate debitis
                                    provident, eveniet consectetur!
                                </p>
                                <p className="#333 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center md:w-[80%]">
                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card1} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card2} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card3} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card4} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card5} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card6} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card7} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card8} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card9} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-[100%] my-8 imgHoverEffect">
                            <div
                                className="flex justify-center items-center relative mb-2 blogImgTransform"
                                style={{ overflow: 'hidden' }}
                            >
                                <img src={Card10} className="w-[230px] " />
                                <div className="blogTransformBox">
                                    <span
                                        className="w-[60px] h-[60px] bg-[#6cdffe] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(-44.2px) translateY(0px)',
                                        }}
                                    ></span>
                                    <span
                                        className="w-[60px] h-[60px] bg-[#f6f6f8] absolute"
                                        style={{
                                            transform:
                                                'rotate(45deg) translateX(16.5px) translateX(0px) ',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <span className="w-[50px]"></span>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#999999] text-[18] font-[700] py-1">
                                    Design Psychology
                                </p>
                                <p className="text-[#000000] text-[24px] font-[700] py-1">
                                    7 Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p className="#222222 py-2">
                                    February 1, 2023 4 min read
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="loadMoreBTN">Load More</button>

                    <div
                        className="flex justify-between items-center w-[85%] p-10 bg-[#0cb9ef55] mb-[2vh] mt-[15vh] rounded-md"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
                    >
                        <div className="flex flex-col justify-center items-start py-10">
                            <p className="text-[32px] font-[700] text-[#555] w-[80%] leading-[40px] my-2">
                                Lorem ipsum dolor sit amet adipisicing elit.{' '}
                            </p>
                            <div
                                className="flex justify-center items-center bg-[#fff] rounded-lg my-2"
                                style={{
                                    boxShadow:
                                        'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                }}
                            >
                                <input
                                    type="search"
                                    value={searchVal}
                                    onChange={(e) => {
                                        setSearchVal(e.target.value)
                                    }}
                                    placeholder="search"
                                    className="text-[20px] text-[#9ca3af] font-[550] focus:outline-none px-3 w-[300px] h-[60px] rounded-lg"
                                />
                                <button
                                    className="bg-[#0cb9ef] w-[80px] h-[50px] rounded-lg mx-1 my-1"
                                    style={{
                                        boxShadow: '0 0 10px #0cb9efaa',
                                        borderTop:
                                            '2px solid rgba(255,255,255,0.2)',
                                        borderBottom:
                                            '2px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    <i className="fa fa-search text-[#fff] font-[700] text-[26px] flex justify-center items-center"></i>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mx-5">
                            <img src={blogSearchBarPic} className="" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
