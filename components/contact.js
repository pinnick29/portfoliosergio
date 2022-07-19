import Image from 'next/image'
import {
  FaLongArrowAltRight,
  FaLinkedinIn,
  FaGithub,
  FaArtstation
} from 'react-icons/fa'

import Button from './common/button'

const myLoader = () => {
  return `/AHgcQvGj_4x.jpg`
}

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col-reverse md:flex-row justify-center items-center  h-screen '
    >
      <div className='flex flex-col items-center gap-y-6  justify-center  md:pt-10  border-gray-300 '>
        <p className='text-xl'>Hello, I m</p>
        <p className=' text-3xl lg:text-5xl lg:h-20 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to to-lime-500'>
          Sergio López Viñuela
        </p>
        <p className='tracking-widest  md:text-xl text-lg'>
          Front-end Developer & 3D Artist
        </p>
        <div className='flex justify-center items-center flex-col md:flex-row gap-6 cursor-pointer'>
          <div className='flex h-12 justify-center items-center w-40 border-2 gap-x-2 hover:bg-gray-600 rounded-full'>
            <p>See Projects</p>
            <FaLongArrowAltRight />
          </div>
          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/sergio-l%C3%B3pez-vi%C3%B1uela-251464213/'
              target='_blank'
              className=' border-2 rounded-full p-3 hover:bg-gray-600'
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href='https://github.com/pinnick29'
              target='_blank'
              className=' border-2 rounded-full p-3 hover:bg-gray-600'
            >
              <FaGithub size={20} />
            </a>
            <a
              href='https://www.artstation.com/ubdb880fd'
              target='_blank'
              className=' border-2 rounded-full p-3 hover:bg-gray-600'
            >
              <FaArtstation size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center max-w-s max-h-s md:max-h-2xl md:max-w-2xl m-10'>
        {
          <Image
            className='rounded-full'
            loader={myLoader}
            src={'/AHgcQvGj_4x.jpg'}
            alt='Picture of the author'
            width={350}
            height={350}
            layout='fixed'
            objectFit='cover'
          />
        }
      </div>
    </div>
  )
}

export default Contact
