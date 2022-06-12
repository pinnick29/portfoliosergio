import Project from "./common/project"
import {FaVirus,FaAndroid} from "react-icons/fa"
import {GiCardPick} from "react-icons/gi"
import {TbBrandKotlin} from 'react-icons/tb'
import Image from "next/image"


const myLoader2 = () => {
  return `/ATLANTICA TABLE.jpg`
}

const myLoader3 = () => {
  return `/3dsmax.svg`
}

const myLoader4 = () => {
  return `/vray.svg`
}

const Projects = () => {
    return (
      <div id='projects' className="bg-gray-300  ">
          <p className="flex  justify-center mx-auto text-6xl  pt-14  pb-8 text-gray-700">
              Featured <span className="pl-4 text-sky-500">Projects</span></p>  
          <p className="flex  justify-center mx-auto text-4xl pb-14 text-gray-700">
          Mobile<span className="pl-4 text-sky-500">Applications</span></p>
          <div className=" flex justify-center items-center">
            <div className="grid grid-cols-2 gap-x-10 ">
                <div ><Project image={<FaVirus size= {96} ></FaVirus>} name= {'Covid Stats'} description = {'It is a project that collects'+
                'information on covid data through an API, configured with the parameters that the user wishes, '+
                'both by dates and at the national, regional and local levels.'} 
                icon1={<TbBrandKotlin size={40}></TbBrandKotlin>} icon2={<FaAndroid size={40}></FaAndroid>} ></Project>
                </div>
                <div><Project image={<GiCardPick size ={96}></GiCardPick>} name= {'Hearthstone Searcher'} 
                description = {'It is a project that collects information about cards from a video game through an API, configured with the parameters that the user wants, both by amount of mana, as a class and as a card type.'}
                icon1={<TbBrandKotlin size={40}></TbBrandKotlin>} icon2={<FaAndroid size={40}></FaAndroid>}></Project>
                </div>
                
            </div>
          </div>

        <p className="flex  justify-center mx-auto text-4xl py-14 text-gray-700">
        ArchViz<span className="pl-4 text-sky-500">Projects</span></p>

        <div className=" flex justify-center items-center">
            <div className="grid grid-cols-2 gap-x-10 text-gray-700">
                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader2}
                    src= {'/ATLANTICA TABLE.jpg'}
                    alt="Picture of the author"
                    width={380}
                    height={380}
                    layout='fixed'
                    objectFit='cover'
                    /> 
                    } name= {'Pottery Shop'}  
                    icon1={
                      <Image
                        className=""
                        loader={myLoader3}
                        src= {'/3dsmax.svg'}
                        alt="Picture of the author"
                        width={40}
                        height={40}
                      /> 
                      
                    } 
                    icon2={
                      <Image
                        className=""
                        loader={myLoader4}
                        src ={'/vray.svg'}
                        alt="Picture of the author"
                        width={40}
                        height={40}
                      /> 
                    
                    } >

                  </Project>
                </div>


                <div><Project image={<GiCardPick size ={96}></GiCardPick>} name= {'Hearthstone Searcher'} 
                description = {'It is a project that collects information about cards from a video game through an API, configured with the parameters that the user wants, both by amount of mana, as a class and as a card type.'}
                icon1={<TbBrandKotlin size={40}></TbBrandKotlin>} icon2={<FaAndroid size={40}></FaAndroid>}></Project>
                </div>
                
            </div>
          </div>
           
      </div>
    )
  }
  
  export default Projects