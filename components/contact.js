import Image from "next/image"
import {FaLongArrowAltRight,FaLinkedinIn,FaGithub,FaArtstation} from 'react-icons/fa'


import Button from "./common/button"

const myLoader = () => {
    return `/AHgcQvGj_4x.jpg`
  }


const Contact = () => {
    return (
      <div id='contact' className='max-w-5xl mx-auto flex  gap-x-52  h-screen ' >
            <div className='flex flex-col w-1/2 gap-y-4 justify-center pt-10  border-gray-300 '>
                <p className="text-xl">Hello, I m</p>
                <p className='text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to to-lime-500'>Sergio López Viñuela</p>
                <p className='tracking-widest text-2xl'>Front-end Developer</p>
                <div className="flex gap-6 cursor-pointer">                
                    <div className="flex justify-center items-center w-40 border-2 gap-x-2 hover:bg-gray-600 rounded-full">
                        <p>See Projects</p>
                        <FaLongArrowAltRight/>
                    </div>
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
            <div className="flex  items-center ">
                { <Image
                    className="rounded-full"
                    loader={myLoader}
                    src= {'/AHgcQvGj_4x.jpg'}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    layout='fixed'
                    objectFit='cover'
                />  }
            </div>
      </div>
    )
  }
  
  export default Contact