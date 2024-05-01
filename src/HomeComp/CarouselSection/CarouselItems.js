const CarouselItems = ( { item } ) => {
    return (
        <div className='flex flex-col justify-center items-center bg-gradient-to-t from-[#0875dc] to-[#0cbaef] group w-[100%] h-[55vh] rounded-[20px]'>
            <div className='flex flex-col justify-center items-center my-10'>
                <h2 className='text-[#ffffff] text-[2.25rem] font-bold my-1'>{item.title}</h2>
                <p className='w-[50px] py-[3px] bg-[#ffffff55] my-1 rounded-lg'></p>
            </div>
            <div className='flex justify-center items-start px-4 my-10 w-[80%]'>
                <div className='flex justify-center items-center w-1/2 mx-2'>
                    <ul className='flex justify-center items-center w-full'>
                        <li className='mx-2'>
                            <img src={item.userImg} className='p-2 w-[80px] h-[80px] rounded-full border' />
                        </li>
                        <li className='mx-2'>
                            <h3 className='text-[#eeeeee] text-[20px] font-bold text-left'>{item.userName}</h3>
                            <p className='text-[.8rem] text-[#ffffffcc] text-left'>{item.userInfo}</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center w-1/2 mx-2">
                    <p className="text-[#fff] w-[95%] text-left">{item.discription}</p>
                </div>
            </div>
        </div>
    );
}

export default CarouselItems