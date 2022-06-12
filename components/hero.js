import {FiDownload} from 'react-icons/fi'

const Hero = () => {
    return (
      <div id='hero' className='bg-gray-300' >
        <div className=' flex max-w-5xl mx-auto py-16 justify-center'>
          <div className=" flex-col space-y-3 w-1/2  h-auto py-8 rounded-3xl   ">
            <p className="text-gray-700 py-4 text-3xl"> <span className="font-bold text-sky-500">Work with a </span>problem solver</p>

            <p className="   text-gray-700 text-left "><span className="text-sky-500 font-bold">"Never stop learning" -Platzi-</span> has been the constant 
            that has governed my life in the last year, when I began to put all my effort into <span className="font-bold text-sky-500">learning 
            high-value skills. </span></p> 

            <p className=" text-left text-gray-700 ">With a programming background, I became fascinated with 
              <span className="font-bold ml-2 text-sky-500">Frontend development </span>
              which became my passion.</p>             
            
            <p className=" text-left text-gray-700  pb-4 ">My goal is to always write and build scalable products and performant code.
              I like to learn new things and I am always <span className="font-bold text-sky-500">looking for
              new challenges.</span></p>

          </div>
          
                 
          <div className='relative flex mx-auto my-auto group '>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full h-52 blur-md  group-hover:opacity-100 group-hover:blur-lg opacity-75'>

            </div>
            <a className="relative cursor-pointer flex mx-auto 
            my-auto bg-gray-300  group-hover:border-gray-500 
            border-gray-400 group-hover:bg-gray-300 border-2 
            w-52 h-52 space-y-auto rounded-full"
            href={'/CV_Sergio_Lopez_Viñuela.pdf'}download > 
            
              <div className='flex-col justify-center mx-auto my-auto text-gray-600   group-hover:text-gray-800'>
                <p className='font-bold text-xl  '>Download CV </p>
                <FiDownload className='mx-auto w-9  h-9 '/>  
              </div> 
            </a>
          </div>
          
          
            
        
      </div>
      </div>
    )
  }
  
  export default Hero