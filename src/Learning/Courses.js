import { useState } from 'react'
import CourseItem from './CourseItem'

const CoursesItem = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center w-[80%] mx-auto mt-[20vh] bg-[#ECF2FF]">
                <CourseItem
                    title="Chat Gpt"
                    btnText="LEARN ABOUT CHATGPT"
                    videoLink={'https://www.youtube.com/embed/jgoR7l4eRRg'}
                />
                <CourseItem
                    title="DIVI"
                    btnText="LEARN ABOUT DIVI"
                    videoLink={'https://www.youtube.com/embed/gTj2OWd5YnM'}
                />
                <CourseItem
                    title="DIVI"
                    btnText="LEARN ABOUT DIVI"
                    videoLink={'https://www.youtube.com/embed/jgoR7l4eRRg'}
                />
                <CourseItem
                    title="DIVI"
                    btnText="LEARN ABOUT DIVI"
                    videoLink={'https://www.youtube.com/embed/jgoR7l4eRRg'}
                />
            </section>
        </>
    )
}

export default CoursesItem
