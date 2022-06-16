import Image from "next/image"
import {FaLongArrowAltRight,FaLinkedinIn,FaGithub,FaArtstation} from 'react-icons/fa'

import Button from "./common/button"

const myLoader = () => {
    return `/AHgcQvGj_4x.jpg`
  }


const Contact = () => {
    return (
      <div id='contact' className='max-w-3xl lg:max-w-5xl mx-auto flex flex-col-reverse  items-center md:flex-row  gap-x-52  h-screen my-20' >
            <div className='flex flex-col w-1/2 gap-y-4 justify-center  pt-10  border-gray-300 '>
                <p className="text-xl text-center md:text-left">Hello, I m</p>
                <p className='text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to to-lime-500 text-center md:text-left '>Sergio López Viñuela</p>
                <p className='flex justify-center  items-center tracking-widest text-2xl sm:text-center md:text-left '>Front-end Developer</p>
                <div className="flex flex-col  justify-center items-center md:flex-row gap-6 cursor-pointer">                
                    <div className="flex justify-center items-center p-2 w-40 border-2 gap-x-2 hover:bg-gray-600 rounded-full">
                        <p>See Projects</p>
                        <FaLongArrowAltRight/>
                    </div>
                    <div className="flex gap-x-4 my-2">
                    <Button 
                        icon={<FaLinkedinIn size={20}/>}
                    />
                    <Button 
                        icon={<FaGithub size={20}/>}
                    />
                    <Button 
                        icon={<FaArtstation size={20}/>}
                    />
                    </div>
                </div>                
            </div>
            <div className="flex  items-center">
                { <Image
                    className="rounded-full"
                    loader={myLoader}
                    src= {'/AHgcQvGj_4x.jpg'}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    objectFit='cover'
                />  }
            </div>
      </div>
    )
  }
  
  export default Contact