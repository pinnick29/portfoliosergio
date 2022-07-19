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

const myLoader5 =() => {
  return `/office.jpg`
}
const myLoader6 =() => {
  return `/house.jpg`
}

const myLoader7 =() => {
  return `/BENI4.jpg`
}

const myLoader8 =() => {
  return `/MIAMI ARTHUR 2.jpg`
}

const myLoader9 =() => {
  return `/HOTEL HUDSON.jpg`
}

const myLoader10 =() => {
  return `/bot yayo.PNG`
}

const myLoader11 =() => {
  return `/salon.PNG`
}
const myLoader12 =() => {
  return `/RENDER COCINA.png`
}

const Projects = () => {
    return (
      <section id='projects' className="bg-gray-300 pt-16 ">
          <p className="flex text-center justify-center mx-auto max-w-2xl lg:max-w-5xl text-5xl md:text-6xl  pt-14  pb-8 text-gray-700">
              Featured Projects</p>  
          <p className="flex  justify-center mx-auto text-4xl pb-14 text-gray-700">
          Mobile Applications</p>
          <div className=" flex justify-center items-center p-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                <a href = 'covidStats' ><Project image={<FaVirus size= {96} ></FaVirus>} name= {'Covid Stats'} description = {'It is a project that collects '+
                'information on covid data through an API, configured with the parameters that the user wishes, '+
                'both by dates and at the national, regional and local levels.'} 
                icon1={<TbBrandKotlin size={40}></TbBrandKotlin>} icon2={<FaAndroid size={40}></FaAndroid>} ></Project>
                </a>
                <a href="cardSearcher"><Project image={<GiCardPick size ={96}></GiCardPick>} name= {'Hearthstone Searcher'} 
                description = {'It is a project that collects information about cards from a video game through an API, configured with the parameters that the user wants, both by amount of mana, as a class and as a card type.'}
                icon1={<TbBrandKotlin size={40}></TbBrandKotlin>} icon2={<FaAndroid size={40}></FaAndroid>}></Project>
                </a>
                
            </div>
          </div>

        <p className="flex  justify-center mx-auto text-4xl py-14 text-gray-700">
        ArchViz Projects</p>

        <div className=" flex justify-center items-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-y-10 w-96 md:w-auto text-gray-700">
            <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader12}
                    src= {'/RENDER COCINA.png'}
                    alt="Picture of the author"
                    width={1000}
                    height={700}
                    objectFit='cover'
                    /> 
                    } name= {'Classic Kitchen'}  
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
                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader2}
                    src= {'/ATLANTICA TABLE.jpg'}
                    alt="Picture of the author"
                    width={1000}
                    height={1000}
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


                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader5}
                    src= {'office.jpg'}
                    alt="Picture of the author"
                    width={1000}
                    height={700}
                    
                    objectFit='cover'
                    /> 
                    } name= {'Ejecutive Office'}  
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

                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader6}
                    src= {'house.jpg'}
                    alt="Picture of the author"
                    width={1000}
                    height={700}
                    
                    objectFit='cover'
                    /> 
                    } name= {'Chalet (WIP)'}  
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

                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader7}
                    src= {'BENI4.jpg'}
                    alt="Picture of the author"
                    width={1000}
                    height={700}
                    
                    objectFit='cover'
                    /> 
                    } name= {'Mediterranean Villa (WIP)'}  
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

                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader8}
                    src= {'MIAMI ARTHUR 2.jpg'}
                    alt="Picture of the author"
                    width={1000}
                    height={700}
                    
                    objectFit='cover'
                    /> 
                    } name= {'Outside Yard (WIP)'}  
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

                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader9}
                    src= {'HOTEL HUDSON.jpg'}
                    alt="Picture of the author"
                    width={1000}
                    height={700}
                    
                    objectFit='cover'
                    /> 
                    } name= {'Hotel Facade (WIP)'}  
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
                
                
            </div>
        </div>

        <p className="flex  justify-center mx-auto text-4xl py-14 text-gray-700">
        Other 3D Projects</p>

        <div className=" flex justify-center items-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 mb-16 ">
                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader10}
                    src= {'/bot yayo.PNG'}
                    alt="Picture of the author"
                    width={380}
                    height={380}
                    
                    objectFit='cover'
                    /> 
                    } name= {'Bots Characters'}  
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


                <div >
                  <Project 
                    image={
                    <Image
                    className=""
                    loader={myLoader11}
                    src= {'office.jpg'}
                    alt="Picture of the author"
                    width={380}
                    height={380}
                    
                    objectFit='cover'
                    /> 
                    } name= {'Videogames scenarios'}  
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

                

                

                
                
    
            </div>
        </div>
           
        
      </section>
    )
  }
  
  export default Projects