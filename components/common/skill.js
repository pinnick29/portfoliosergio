
const Skill = ({ name, icon }) => {
    return (
      <div id='skill' >
        <div className=" flex flex-col justify-center items-center space-y-4 drop-shadow-xl "> 
            <div className="text-7xl text-gray-700 ">{icon}</div>
            <div className="text-transparent bg-clip-text justify-center text-xl align-middle bg-gray-700">{name}</div>
        </div>        
      </div>
    )
  }
  
  export default Skill