import { useNavigate } from 'react-router'
import './StackAndButtons.css'
import Marquee from 'react-fast-marquee'
import { motion } from "motion/react"

function StackAndButtons(){
  const navigate = useNavigate()
  const iconClass = `toolIcon transition-all duration-200`
  const myStack = ['html', 'css', 'javascript', 'react', 'redux', 'vite', 'tailwind', 'bootstrap', 'python', 'flask', 'sqlalchemy', 'nodejs', 'express', 'api', 'git', 'github', 'netlify', 'vercel', 'render', 'docker']

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
          <Marquee className='stack-container' pauseOnHover autoFill>
            {myStack.map(tool => <img src={`https://go-skill-icons.vercel.app/api/icons?i=${tool}`}alt={`${tool} icon`} className={iconClass} title={tool}/>)}
          </Marquee>
        </div>
        <hr className='mt-3 mb-3 rounded-2xl separator'/>
        <div className='flex flex-row gap-3 justify-center items-center'>
          <button className='rounded-full p-2 portfolioButtons' onClick={() => navigate("/portfolio/projects")}>Projects</button>
          <button className='rounded-full p-2 portfolioButtons' onClick={() => navigate("/portfolio/aboutme")}>About me</button>
        </div>
      </motion.div>
    </>
  )
}

export default StackAndButtons