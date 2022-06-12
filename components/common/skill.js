
const Skill = ({ name, icon }) => {
    return (
      <div id='skill' >
        <div className=" flex flex-col justify-center items-center space-y-4 drop-shadow-xl shadow-sky-500"> 
            <div className="text-7xl text-gray-300  drop-shadow-2xl    ">{icon}</div>
            <div className="text-transparent bg-clip-text justify-center text-xl align-middle bg-gradient-to-r from-sky-500 to to-emerald-500">{name}</div>
        </div>        
      </div>
    )
  }
  
  export default Skill