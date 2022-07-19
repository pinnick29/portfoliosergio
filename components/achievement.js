import {FiCheckCircle} from 'react-icons/fi'
import {IoMdPeople} from 'react-icons/io'
import {MdOutlineScience} from 'react-icons/md'


const Achievement = () => {
    return (
      <div id='achievement' className='bg-gray-800 border-t-2 border-gray-200 ' >
        <div className= 'max-w-3xl lg:max-w-5xl flex-col md:flex-row items-center mx-auto flex justify-center  h-1/5 py-10'>
            <div className=" flex flex-col md:flex-row justify-center items-center font-medium text-3xl w-1/3 p-4">
                <p >Great Achievements in My Career</p>
            </div>
            <div className=' flex flex-col md:flex-row w-3/4 justify-center items-center  my-4 gap-4 '>
                <div className='flex  border-t-2 md:border-r-2 md:border-t-0 h-5/6 p-4 gap-4 justify-center items-center  '>
                    <FiCheckCircle size = {56} className='  text-sky-500 '/>
                    <div  className='flex flex-col '>
                        <p className = '  text-gray-300 text-5xl font-medium '>13</p>
                        <p className = '  text-gray-300  text-sm font-medium '>Projects completed</p>
                    </div>
                </div>
                <div  className='flex border-t-2 md:border-r-2 md:border-t-0 h-5/6 p-4 gap-4 justify-center items-center'>
                    <IoMdPeople size={56} className='  text-sky-500'/>
                    <div className='flex flex-col '>
                        <p className = '   text-gray-300 text-5xl font-medium'>16+</p>
                        <p className = '  text-gray-300  text-sm font-medium'>Software learned</p>
                    </div>
                </div>
                <div className='flex h-5/6  border-t-2 md:border-t-0 p-4 gap-4 justify-center items-center'>
                    <MdOutlineScience size= {56} className=' text-sky-500'/>
                    <div className='flex flex-col '>
                        <p className = '   text-gray-300 text-5xl font-medium'>2</p>
                        <p className = '  text-gray-300 text-sm font-medium'>I+D projects</p>
                    </div>
                </div>
            </div>
           
        </div>
        
      </div>
    )
  }
  
  export default Achievement