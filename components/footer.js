import Button from "./common/button"
import {FaLinkedinIn,FaGithub,FaArtstation} from 'react-icons/fa'

const Footer = () => {
    return (
      <div id='footer' className="bg-gray-800">
        <div className= ' sticky  max-w-3xl lg:max-w-5xl flex mx-auto text-gray-300  font-medium h-1/6 justify-center gap-x-8 py-4 '>
           
            <div className=" hidden justify-center items-center  md:flex gap-x-4">
            <p className = 'flex justify-center cursor-pointer hover:drop-shadow-2xl hover:font-bold '>Sergio López Viñuela</p>
            <div className="flex gap-x-4 my-2">
                    <Button 
                        icon={<FaLinkedinIn size={15}/>}
                    />
                    <Button 
                        icon={<FaGithub size={15}/>}
                    />
                    <Button 
                        icon={<FaArtstation size={15}/>}
                    />
                    </div>
            </div>
            
        </div>
        
      </div>
    )
  } 
  export default Footer