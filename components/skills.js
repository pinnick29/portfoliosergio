import Skill from "./common/skill";
import {IoLogoJavascript } from 'react-icons/io'
import { FaReact , FaHtml5 ,FaGithub} from "react-icons/fa";
import {SiTailwindcss ,SiKotlin } from "react-icons/si"
import { DiCss3 } from 'react-icons/di'
import { TbBrandNextjs} from 'react-icons/tb'

const Skills = ( {name, icon}) => {
    return (
      <div id='skills' className="bg-gray-800  border-y-2  ">
        <p className="flex items-center justify-center mx-auto text-6xl pt-14">I use Techs <span className="pl-4 text-sky-500">in Demand</span></p>
        <div className='max-w-5xl mx-auto py-20 flex justify-center items-center gap-x-20'>
            
            <Skill name={'React'} icon={<FaReact></FaReact>} />
            <Skill name={'NextJS'} icon={ <TbBrandNextjs></TbBrandNextjs>} />
            <Skill name={'TailwindCSS'} icon={<SiTailwindcss></SiTailwindcss>} />
            <Skill  icon={<IoLogoJavascript></IoLogoJavascript>} name={'Javascript'}  />
            <Skill name={'HTML'} icon={<FaHtml5></FaHtml5>} />
            <Skill name={'CSS'} icon={<DiCss3></DiCss3>} />
            <Skill name={'GitHub'} icon={ <FaGithub></FaGithub>} />
            
        </div>
      </div>
    )
  }
  
  export default Skills
