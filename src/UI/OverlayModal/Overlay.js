const Overlay = (props) => {
    return (
        <>
            <div className="flex justify-center items-center w-[100%] h-[100vh] fixed top-0 left-0 z-[10] bg-[rgba(0,0,0,.2)] ">
                {props.children}
            </div>
        </>
    )
}

export default Overlay
