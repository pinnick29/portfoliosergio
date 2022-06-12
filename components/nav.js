const Nav = () => {
    return (
      <div id='nav' className="bg-gray-800">
        <div className= ' sticky top-0 max-w-5xl mx-auto text-gray-300  font-medium flex justify-end gap-x-8 py-10 '>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>HOME</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>ABOUT ME</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>SERVICES</p>

            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>SKILLS</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>PROJECTS</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>BLOG</p>
            <p className = 'flex justify-center w-24 cursor-pointer hover:drop-shadow-2xl hover:font-bold'>CONTACT</p>
        </div>
        
      </div>
    )
  } 
  export default Nav