import { useNavigate } from 'react-router'
import styles from '@components/StackAndButtons.module.css'
import Marquee from 'react-fast-marquee'
import { motion } from "motion/react"
import { techStack } from '@/data/myStack'

function StackAndButtons(){
  const navigate = useNavigate()
  const iconClass: string = `${styles.toolIcon} transition-all duration-200`
  const myStack: string[] = techStack;

  return (
    <>
      <motion.div 
        className='w-full'
        initial={{ height: 0 }}
        animate={{ height: 160 }}
        transition={{
          duration: 0.7,
          scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
        }}
      >
        <div className='flex flex-col gap-3 w-full overflow-hidden'>
          <p className='text-xl'>Stack</p>
          <Marquee className={styles.stackContainer} pauseOnHover autoFill>
            {myStack.map(tool => <img src={`https://go-skill-icons.vercel.app/api/icons?i=${tool}`}alt={`${tool} icon`} className={iconClass} title={tool}/>)}
          </Marquee>
        </div>
        <hr className='mt-3 mb-3 rounded-2xl separator'/>
        <div className='flex flex-row gap-3 justify-center items-center'>
          <button className={`rounded-full p-2 ${styles.portfolioButtons}`} onClick={() => navigate("/portfolio/projects")}>Proyectos</button>
          <button className={`rounded-full p-2 ${styles.portfolioButtons}`} onClick={() => navigate("/portfolio/aboutme")}>Sobre mí</button>
        </div>
      </motion.div>
    </>
  )
}

export default StackAndButtons