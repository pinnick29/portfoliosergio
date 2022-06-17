import Image from "next/image"
import {FaLongArrowAltRight,FaLinkedinIn,FaGithub,FaArtstation} from 'react-icons/fa'


import Button from "./common/button"

const myLoader = () => {
    return `/AHgcQvGj_4x.jpg`
  }


const Contact = () => {
    return (
      <div id='contact' className='max-w-3xl lg:max-w-5xl mx-auto flex flex-col-reverse  items-center md:flex-row p-2 gap-14  h-screen my-20' >
            <div className='flex flex-col w-1/2 h-1/2 gap-y-4 justify-center  pt-10  border-gray-300 '>
                <p className="text-xl text-center md:text-left">Hello, I m</p>
                <p className='text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to to-lime-500 text-center md:text-left '>Sergio López Viñuela</p>
                <p className='flex justify-center  items-center tracking-widest text-2xl text-center  md:text-left '>Front-end Developer</p>
                <div className="flex flex-col  justify-center items-center md:flex-row gap-6 cursor-pointer">               
                    <a  href = '#projects' className="flex justify-center items-center p-2 w-40 border-2 gap-x-2 hover:bg-gray-600 rounded-full">
                        <p>See Projects</p>
                        <FaLongArrowAltRight/>
                    </a>
                    <div className="flex gap-x-4 my-2">
                    
                
                    <a href="https://www.linkedin.com/in/sergio-l%C3%B3pez-vi%C3%B1uela-251464213/" target='_blank' >
                        <Button
                            icon= {<FaLinkedinIn size={20}/>}
                        />
                    </a>

                    <a href="https://github.com/pinnick29" target='_blank' >
                        <Button
                            icon= {<FaGithub size={20}/>}
                        />
                    </a>

                    <a href="https://www.artstation.com/ubdb880fd" target='_blank' >
                        <Button
                            icon= {<FaArtstation size={20}/>}
                        />
                    </a>
                    
                    
                    </div>
                </div>                
            </div>
            <div className="flex h-1/2 items-center">
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