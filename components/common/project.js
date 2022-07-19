const Project = ({ image, name, description,icon1,icon2}) => {
    return (
      <div id='project' >
        <div className='flex mx-auto my-auto group '>
            <div className= " flex  gap-y-2 py-6 rounded-lg flex-col mx-auto justify-center items-center border-2 border-gray-400 max-w-xs md:max-w-5xl lg:max-w-7xl  bg-gray-300  space-y-auto ">
                <div className=" flex items-center justify-center text-gray-700 " >{image}</div>
                <p className="flex justify-center text-2xl text-gray-700 max-w-96 md:max-w-xl ">{name}</p>
                <p className="flex justify-center text-md text-gray-800 px-6 max-w-96 md:max-w-lg ">{description}</p>

                <div className="flex justify-center items-center text-gray-700 gap-10 ">
                    <div>{icon1}</div>
                    <div>{icon2}</div>
                </div>
            </div>

           
          </div>
            
        </div>        
      
    )
  }
  
  export default Project