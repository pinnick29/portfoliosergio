import {FiDownload} from 'react-icons/fi'

const Hero = () => {
    return (
      <section id = "about-section">  
        <div id='hero' className='bg-gray-300 pt-16' >
          <div className=' flex flex-col md:flex-row items-center max-w-2xl lg:max-w-5xl mx-auto md:py-10 gap-10 justify-center'>
            <div className=" flex-col space-y-3 w-2/3  h-auto py-8 rounded-3xl   ">
              <p className="text-gray-700 py-4 text-3xl"> <span className="font-bold text-sky-500">Work with a </span>problem solver</p>

              <p className="   text-gray-700 text-left "><span className="text-sky-500 font-bold">"Never stop learning" -Platzi-</span> has been the constant 
              that has governed my life in the last year, when I began to put all my effort into <span className="font-bold text-sky-500">learning 
              high-value skills. </span></p> 

              <p className=" text-left text-gray-700 ">With a programming background, I became fascinated with 
                <span className="font-bold ml-2 text-sky-500">Frontend development </span>
                which became my passion, thanks to streamers like Midudev or Mouredev, who allowed me to learn best practices while being entertained.</p>             
              
              <p className=" text-left text-gray-700  pb-4 ">My goal is to always write and build scalable products and performant code.
                I like to learn new things and I am always <span className="font-bold text-sky-500">looking for
                new challenges.</span></p>

            </div>
            
                  
            <div className='relative flex mx-auto my-auto justify-center items-center  group '>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full h-30 blur-md  group-hover:opacity-100 group-hover:blur-lg opacity-75'>

              </div>
              <a className="relative cursor-pointer flex mx-auto 
              my-auto bg-gray-300  group-hover:border-gray-500 
              border-gray-400 group-hover:bg-gray-300 border-2 
              w-52 h-auto space-y-auto  rounded-full"
              href={'/CV_Sergio_Lopez_Viñuela.pdf'}download > 
              
                <div className='flex-col justify-center mx-auto my-auto text-gray-600   group-hover:text-gray-700'>
                  <p className='font-bold text-xl p-4 '>Download CV </p>
                
                </div> 
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero