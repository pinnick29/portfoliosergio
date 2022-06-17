
import Image from "next/image"
import Link from 'next/link'
const myLoader1 = () => {
  return `/logo.png`
}

const Nav = () => {
    return (
      <div id='nav' className="fixed  top-0 z-10 w-screen bg-gray-800">
        <div className='relative max-w-3xl lg:max-w-5xl flex mx-auto text-gray-300  font-medium  justify-center gap-x-8 py-2'>
          <ul className="md:w-1/3">
            <li>
              <Link href="/">
                <a><Image
                    className=""
                    loader={myLoader1}
                    src= {'/logo.PNG'}
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    layout='fixed'
                    objectFit='cover'
                    /> </a>
              </Link>
            </li> 
          </ul>
            
            <div className=" hidden justify-center items-center w-2/3 md:flex ">
            <a className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold' href = '#about-section' >ABOUT ME</a>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>SERVICES</p>
            <a className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold' href = '#skills-section' >SKILLS</a>
            <a className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold' href = '#projects' >PROJECTS</a>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>BLOG</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>CONTACT</p>
            </div>
            
        </div>
        
      </div>
    )
  } 
  export default Nav