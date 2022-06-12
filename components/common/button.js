
const Button = ({ icon}) => {
    return (
      <div id='button' >
        <div className="flex justify-center items-center border-2 w-12 h-12 hover:bg-gray-600  bg-grey-200 rounded-full">
            {icon}
        </div>        
      </div>
    )
  }
  
  export default Button