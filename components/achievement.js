import {FiCheckCircle} from 'react-icons/fi'
import {IoMdPeople} from 'react-icons/io'
import {HiBadgeCheck} from 'react-icons/hi'


const Achievement = () => {
    return (
      <div id='achievement' className='bg-gray-800 border-t-2 border-gray-200 ' >
        <div className= 'max-w-5xl mx-auto flex justify-center  h-1/5 py-10'>
            <div className=" flex flex-col font-medium text-3xl w-1/3 ">
                <p className = ' text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to to-emerald-500'>Great</p>
                <div className='flex gap-2'>
                    <p className = 'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to to-emerald-500'>Achievements </p>
                    <p className = 'text-gray-300'>in</p>
                </div>      
                
                <p className = 'text-gray-300'>My Career</p>
            </div>
            <div className=' flex w-2/3 justify-center items-center  gap-4 '>
                <div className='flex border-r-2 h-5/6 px-4 gap-4 justify-center items-center  '>
                    <FiCheckCircle size = {56} className='  text-sky-500 '/>
                    <div  className='flex flex-col '>
                        <p className = '  text-gray-300 text-5xl font-medium '>54</p>
                        <p className = '  text-gray-300  text-sm font-bold '>Projects completed</p>
                    </div>
                </div>
                <div  className='flex border-r-2  h-5/6 px-4 gap-4 justify-center items-center'>
                    <IoMdPeople size={56} className='  text-sky-500'/>
                    <div className='flex flex-col '>
                        <p className = '   text-gray-300 text-5xl font-medium'>800+</p>
                        <p className = '  text-gray-300  text-sm font-bold'>Satified Clients</p>
                    </div>
                </div>
                <div className='flex h-5/6  px-4 gap-4 justify-center items-center'>
                    <HiBadgeCheck size= {56} className=' text-sky-500'/>
                    <div className='flex flex-col '>
                        <p className = '   text-gray-300 text-5xl font-medium'>-2</p>
                        <p className = '  text-gray-300  text-sm font-bold'>Awards wining</p>
                    </div>
                </div>
            </div>
           
        </div>
        
      </div>
    )
  }
  
  export default Achievement