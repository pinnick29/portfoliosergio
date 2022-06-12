import Head from 'next/head'

import Nav from '../components/nav'
import Contact from '../components/contact'
import Achievement from '../components/achievement'
import Hero from '../components/hero'
import Skills from '../components/skills'
import Projects from '../components/projects'

export default function Home() {
  return (
    <div className='bg-gray-700 text-gray-300'>
      <Head> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap" rel="stylesheet" />
          <title>
            Sergio Portfolio
          </title> 
        </Head>
        <Nav />
        <Contact/>
        <Achievement/>
        <Hero/>
        <Skills />
        <Projects/>

    </div>
  )
}
