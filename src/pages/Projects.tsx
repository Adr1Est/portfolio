import styles from '@pages/Projects.module.css'
import { projectsData } from '@/data/projectsData'
import Tilt from 'react-parallax-tilt'
import ProjectCard from '@components/ProjectCard'
import { motion } from "motion/react"
import BackButton from '@components/BackButton'

function Projects(){
  const reverseProjects = [...projectsData].reverse()

  return (
    <>
      <BackButton to={"/portfolio"} stylesFromParent={"flex w-full"}/>
      <motion.div 
        className={`flex flex-col md:flex-row items-center gap-3 m-7 w-full overflow-x-hidden md:overflow-x-auto overflow-y-auto md:overflow-y-hidden ${styles.projectsContainer}`}
        initial={{ height: 0 }}
        animate={{ height: 300 }}
        transition={{
          duration: 0.7,
          scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
        }}
      >
        {reverseProjects.map((project) => (
          <Tilt tiltReverse={true} key={project.id}>
            <ProjectCard project={project}/>
          </Tilt>)
        )}
      </motion.div>
    </>
  )
}

export default Projects