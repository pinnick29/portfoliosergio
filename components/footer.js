import Button from "./common/button"
import {FaLinkedinIn,FaGithub,FaArtstation} from 'react-icons/fa'

const Footer = () => {
    return (
      <div id='footer' className="bg-gray-800">
        <div className= ' sticky  max-w-3xl lg:max-w-5xl flex mx-auto text-gray-300  font-medium h-1/6 justify-center gap-x-8 py-4 '> 
          <div className=" justify-center items-center  md:flex gap-x-4">
            <p className = 'flex justify-center cursor-pointer hover:drop-shadow-2xl hover:font-bold '>Sergio López Viñuela</p>
            <div className="flex gap-x-4 my-2">
              <a href="https://www.linkedin.com/in/sergio-l%C3%B3pez-vi%C3%B1uela-251464213/" target='_blank' className=" border-2 rounded-full p-3 hover:bg-gray-600" >
                <FaLinkedinIn size={20}/>
              </a>
              <a href="https://github.com/pinnick29" target='_blank' className=" border-2 rounded-full p-3 hover:bg-gray-600" >
                <FaGithub size={20}/>
              </a>
              <a href="https://www.artstation.com/ubdb880fd" target='_blank' className=" border-2 rounded-full p-3 hover:bg-gray-600" >
                <FaArtstation size={20}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } 
  export default Footer