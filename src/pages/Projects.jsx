import './Projects.css'
import { projectsData } from '../data/projectsData'
import Tilt from 'react-parallax-tilt'
import ProjectCard from '../components/ProjectCard'
import { ArrowBigLeft } from 'lucide-react'
import { useNavigate } from 'react-router'
import { motion } from "motion/react"

function Projects(){
  const navigate = useNavigate()

  return (
    <>
      <button className='flex w-full backIcon' onClick={() => navigate('/portfolio')}>
        <ArrowBigLeft/>
      </button>
      <motion.div 
        className="flex flex-col md:flex-row gap-3 m-7 w-full overflow-x-hidden md:overflow-x-auto overflow-y-auto md:overflow-y-hidden projects-container"
        initial={{ height: 0 }}
        animate={{ height: 300 }}
        transition={{
          duration: 0.7,
          scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
        }}
      >
        {projectsData.map((project) => (
          <Tilt tiltReverse={true} key={project.id}>
            <ProjectCard project={project}/>
          </Tilt>)
        )}
      </motion.div>
    </>
  )
}

export default Projects