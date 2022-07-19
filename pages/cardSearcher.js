import Nav from "../components/nav"
import Head from "next/head"
import { FaVirus } from "react-icons/fa"
import Footer from "../components/footer"

const CardSearcher = () => {
    return (
      <div>
        <Head> 
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap" rel="stylesheet" />
            <title>
              Sergio Portfolio
            </title> 
        </Head>
        <Nav />
        <div className=" flex flex-col items-center gap-8 bg-gray-300 h-auto text-gray-700 text-5xl md:text-7xl ">
          <div className="flex flex-col sm:flex-row  items-center pt-20 justify-center gap-4 h-64">
            <FaVirus></FaVirus>
            <p className="flex items-center   font-medium ">Covid Stats</p>
            <FaVirus className=" hidden sm:flex"></FaVirus>
          </div>
          <p className="text-2xl flex justify-center items-center  max-w-xs xs:max-w-2xl lg:max-w-4xl">It is a project that was carried out for the Mobile Applications subject, using both Kotlin and Android Studio. This project collects information from Covid statistics through an API and displays the results obtained based on parameters entered by the user.</p>
          <video  className=" my-14 max-w-xs md:max-w-xl" width="300px" height="300px" 
            controls autoplay > 
            <source src="covidStats.mp4" 
              type="video/mp4"/> 
          </video>
        </div>
        <Footer />
      </div>
    )
  } 
  export default CardSearcher