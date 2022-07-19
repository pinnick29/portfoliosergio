import Skill from "./common/skill";
import {IoLogoJavascript } from 'react-icons/io'
import { FaReact , FaHtml5 ,FaGithub} from "react-icons/fa";
import {SiTailwindcss ,SiKotlin } from "react-icons/si"
import { DiCss3 } from 'react-icons/di'
import { TbBrandNextjs} from 'react-icons/tb'

const Skills = ( {name, icon}) => {
    return (
      <section id = "skills-section">  
        <div id='skills' className="bg-gray-300  pt-16 ">
          <p className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mx-auto text-3xl md:text-6xl pt-14 text-gray-700">I use Techs in Demand</p>
          <div className='max-w-5xl mx-auto py-20 flex flex-row md:flex-col  lg:flex-row justify-center items-center gap-20 md:gap-y-20 '>
            <div className=" flex flex-col md:flex-row justify-center gap-20 items-center">
              <Skill name={'React'} icon={<FaReact></FaReact>} />
              <Skill name={'NextJS'} icon={ <TbBrandNextjs></TbBrandNextjs>} />
              <Skill name={'TailwindCSS'} icon={<SiTailwindcss></SiTailwindcss>} />
              <Skill  icon={<IoLogoJavascript></IoLogoJavascript>} name={'Javascript'}  />
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-20 items-center">
              <Skill name={'HTML'} icon={<FaHtml5></FaHtml5>} />
              <Skill name={'CSS'} icon={<DiCss3></DiCss3>} />
              <Skill name={'GitHub'} icon={ <FaGithub></FaGithub>} />
            </div>
              
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
