
import Image from "next/image"
const myLoader1 = () => {
  return `/logo.png`
}

const Nav = () => {
    return (
      <div id='nav' className="bg-gray-800">
        <div className= ' sticky  max-w-3xl lg:max-w-5xl flex mx-auto text-gray-300  font-medium  justify-center gap-x-8 py-5 '>
            <div className="md:w-1/3">
            <Image
                    className=""
                    loader={myLoader1}
                    src= {'/logo.PNG'}
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    layout='fixed'
                    objectFit='cover'
                    /> 
            </div>
            <div className=" hidden justify-center items-center w-2/3 md:flex ">
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>ABOUT ME</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>SERVICES</p>

            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>SKILLS</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>PROJECTS</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>BLOG</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>CONTACT</p>
            </div>
            
        </div>
        
      </div>
    )
  } 
  export default Nav