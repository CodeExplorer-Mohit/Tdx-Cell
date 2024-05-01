import Header from '../HomeComp/Header'
import Footer from '../HomeComp/Footer'
import EventPic from './eventPic.jpg'
import './Events.css'

const Events = () => {
    return (
        <>
            <Header />

            <section className="flex justify-center items-center w-[100%] eventBannerBgTwo">
                <div className="flex justify-center items-center w-full h-[80vh] ">
                    <div className="flex justify-center items-center w-full h-full bg-[rgba(0,0,0,)]">
                        <h1 className="text-[#222] text-[3.5rem] font-[800]">
                            Events Page
                        </h1>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center w-[100%] my-10 bg-[#fff]">
                <div className="flex md:flex-row flex-col justify-center items-center md:w-[85%] w-[90%] h-[60vh] ">
                    <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
                        <h2 className="flex flex-col justify-center items-center tracking-[.5px] leading-[50px]">
                            <p
                                className="md:text-[2.25rem] text-[1.5rem] text-[#1a4ca5] text-center font-[800] w-[80%] eventHeadPera"
                                style={{
                                    textShadow: '0 0 3px rgba(0,0,0,0.2)',
                                }}
                            >
                                EVENTNAME
                            </p>
                            <p
                                className="md:text-[2.25rem] text-[1.8rem] text-[#13aaf4] font-[800] eventOtherDisc"
                                style={{
                                    textShadow: '0 0 3px rgba(0,0,0,0.2)',
                                }}
                            >
                                Other Discription
                            </p>
                        </h2>

                        <p className="text-[.9rem] text-[#67748e] text-center md:w-[60%] w-[full] my-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex molestias repudiandae rerum quis eius
                            fugiat ducimus aperiam nesciunt. Ipsa dicta quidem
                            vero error dignissimos temporibus illo voluptates
                            reiciendis voluptatum aut?
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:w-1/2 w-full py-5">
                        <div className="flex justify-center items-center mx-5">
                            <img src={EventPic} className="w-[90%]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center w-[100%] my-10 bg-[#fff]">
                <div className="flex md:flex-row flex-col justify-center items-center md:w-[85%] w-[90%] h-[60vh] ">
                    <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
                        <h2 className="flex flex-col justify-center items-center tracking-[.5px] leading-[50px]">
                            <p
                                className="md:text-[2.25rem] text-[1.5rem] text-[#1a4ca5] text-center font-[800] w-[80%] eventHeadPera"
                                style={{
                                    textShadow: '0 0 3px rgba(0,0,0,0.2)',
                                }}
                            >
                                EVENTNAME
                            </p>
                            <p
                                className="md:text-[2.25rem] text-[1.8rem] text-[#13aaf4] font-[800] eventOtherDisc"
                                style={{
                                    textShadow: '0 0 3px rgba(0,0,0,0.2)',
                                }}
                            >
                                Other Discription
                            </p>
                        </h2>

                        <p className="text-[.9rem] text-[#67748e] text-center md:w-[60%] w-[full] my-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex molestias repudiandae rerum quis eius
                            fugiat ducimus aperiam nesciunt. Ipsa dicta quidem
                            vero error dignissimos temporibus illo voluptates
                            reiciendis voluptatum aut?
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:w-1/2 w-full py-5">
                        <div className="flex justify-center items-center mx-5">
                            <img src={EventPic} className="w-[90%]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center w-[100%] my-10 bg-[#fff]">
                <div className="flex md:flex-row flex-col justify-center items-center md:w-[85%] w-[90%] h-[60vh] ">
                    <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
                        <h2 className="flex flex-col justify-center items-center tracking-[.5px] leading-[50px]">
                            <p
                                className="md:text-[2.25rem] text-[1.5rem] text-[#1a4ca5] text-center font-[800] w-[80%] eventHeadPera"
                                style={{
                                    textShadow: '0 0 3px rgba(0,0,0,0.2)',
                                }}
                            >
                                EVENTNAME
                            </p>
                            <p
                                className="md:text-[2.25rem] text-[1.8rem] text-[#13aaf4] font-[800] eventOtherDisc"
                                style={{
                                    textShadow: '0 0 3px rgba(0,0,0,0.2)',
                                }}
                            >
                                Other Discription
                            </p>
                        </h2>

                        <p className="text-[.9rem] text-[#67748e] text-center md:w-[60%] w-[full] my-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex molestias repudiandae rerum quis eius
                            fugiat ducimus aperiam nesciunt. Ipsa dicta quidem
                            vero error dignissimos temporibus illo voluptates
                            reiciendis voluptatum aut?
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:w-1/2 w-full py-5">
                        <div className="flex justify-center items-center mx-5">
                            <img src={EventPic} className="w-[90%]" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

// id:'1';
// head: 'What our customer are saying';
// userName: 'Lorem Ipsum';
// userInfo:'Find the below information.';
// discription: 'Download Healthcare Startup free Landing Page for free. a freebie landing page for a one-stop healthcare solution virtuality. Elegant and clean landing page design for Figma. a useful design concept for your next project. Find the below information.';

export default Events
