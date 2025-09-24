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
      <button className='backIcon' onClick={() => navigate('/portfolio')}>
        <ArrowBigLeft/>
      </button>
      <motion.div 
        className="flex flex-row gap-3 w-full overflow-x-auto overflow-y-hidden projects-container"
        initial={{ height: 0 }}
        animate={{ height: 310 }}
        transition={{
          duration: 0.7,
          scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
        }}
      >
        {projectsData.map((project) => (
          <Tilt tiltReverse={true}>
            <ProjectCard project={project}/>
          </Tilt>)
        )}
      </motion.div>
    </>
  )
}

export default Projects