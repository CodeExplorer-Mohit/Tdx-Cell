import React from "react";
import Header from "../HomeComp/Header";
import LandingSection from "../HomeComp/LandingSection";
import FifthSection from "../HomeComp/FifthSection";
import CarouselSection from "../HomeComp/CarouselSection/CarouselSection";
import ServicesSection from "../HomeComp/ServicesSection";
import Footer from "../HomeComp/Footer";
import ThirdSection from "../HomeComp/ThirdSection";
import LandingNewSec from "./LandingNewSec";

export default function(){
    return(
        <>
            <Header />
            <LandingSection />
            <ThirdSection />
            <LandingNewSec/>
            <ServicesSection />
            <CarouselSection />
            <FifthSection />
            <Footer />
        </>
    )
}