import Footer from '../HomeComp/Footer'
import Header from '../HomeComp/Header'
import ClubsCard from './ClubCard'
import Pagination from './Pagination'
import Banner from './Banner'
import ClubsCategory from './ClubsCategory'

const Clubs = () => {
    return (
        <>
            <Header />
            <section className="flex flex-col justify-center items-center w-[100%] mt-[10vh]">
                <Banner />
                <div className="flex flex-wrap justify-center items-center w-[100%] cursor-pointer">
                    <ClubsCategory />
                    <ClubsCategory />
                    <ClubsCategory />
                    <ClubsCategory />
                </div>
                <div className="flex flex-wrap justify-center items-center w-[90%] py-10">
                    <ClubsCard />
                    <ClubsCard />
                    <ClubsCard />
                    <ClubsCard />
                    <ClubsCard />
                    <ClubsCard />
                    <ClubsCard />
                    <ClubsCard />
                </div>
                <Pagination />
            </section>
            <Footer />
        </>
    )
}
export default Clubs
