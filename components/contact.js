import Image from "next/image"
import {FaLongArrowAltRight,FaLinkedinIn,FaGithub,FaArtstation} from 'react-icons/fa'


import Button from "./common/button"

const myLoader = () => {
    return `/AHgcQvGj_4x.jpg`
  }


const Contact = () => {
    return (
      <div id='contact' className='flex justify-center items-center  h-screen ' >
            <div className='flex flex-col items-center gap-y-6 justify-center pt-10  border-gray-300 '>
                <p className="text-xl">Hello, I m</p>
                <p className=' text-3xl lg:text-5xl lg:h-20 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to to-lime-500'>Sergio López Viñuela</p>
                <p className='tracking-widest  md:text-xl text-lg'>Front-end Developer & 3D Artist</p>
                <div className="flex justify-center items-center flex-col md:flex-row gap-6 cursor-pointer">                
                    <div className="flex h-12 justify-center items-center w-40 border-2 gap-x-2 hover:bg-gray-600 rounded-full">
                        <p>See Projects</p>
                        <FaLongArrowAltRight/>
                    </div>
                    <div className="flex gap-4">
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
            <div className="hidden md:flex justify-center items-center md:gap-20 m-10">
                { <Image
                    className="rounded-full"
                    loader={myLoader}
                    src= {'/AHgcQvGj_4x.jpg'}
                    alt="Picture of the author"
                    width={350}
                    height={350}
                    layout='fixed'
                    objectFit='cover'
                />  }
            </div>
      </div>
    )
  }
  
  export default Contact