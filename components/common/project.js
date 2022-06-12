const Project = ({ image, name, description,icon1,icon2}) => {
    return (
      <div id='project' >
        <div className='relative flex mx-auto my-auto group '>
            <div className='absolute  rounded-lg   h-96 w-96 '>

            </div>
            <div className= "relative flex  gap-y-5 py-10 rounded-lg flex-col mx-auto justify-center items-center border-2 border-gray-400 hover:border-gray-500 bg-gray-300  w-96 space-y-auto ">
                <div className="basis-1/2 flex items-center justify-center text-gray-700 " >{image}</div>
                <p className="text-2xl text-gray-700 ">{name}</p>
                <p className="text-md text-gray-800 px-6">{description}</p>
                <div className="flex justify-center items-center bg- text-gray-700 gap-10 ">
                    <div>{icon1}</div>
                    <div>{icon2}</div>
                </div>
            </div>

           
          </div>
            
        </div>        
      
    )
  }
  
  export default Project