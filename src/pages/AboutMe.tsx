import styles from '@pages/AboutMe.module.css'
import { motion } from "motion/react"
import BackButton from "@components/BackButton"
import Tilt from 'react-parallax-tilt'
import TechCard from '@components/TechCard'

function AboutMe(){
  return (
    <>
      <BackButton to={'/portfolio'} stylesFromParent={'self-start'} />
      <motion.div 
        className="flex flex-col p-1 w-full"
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        transition={{
          duration: 0.7,
          scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
        }}
      >
        <Tilt
          tiltEnable={false}
          glareEnable={true}
          glareMaxOpacity={0.1}
          glareColor="black"
          glarePosition="all"
          glareBorderRadius="15px"
          className={`flex flex-col gap-1 p-3 w-full ${styles.aboutmeBox}`}
        >
          <p className="text-justify w-full">
            <strong>Desarrollador Front-end</strong> con más de 2 años de experiencia en aplicaciones web modernas.<br/>
            Especializado en <strong>React/Next.js</strong> y <strong>TypeScript</strong>, con conocimientos <strong>Back-end</strong> en <strong>Node.js</strong> y <strong>Flask</strong>.<br/>
            Perfil <strong>autodidacta</strong>, <strong>adaptable</strong> y orientado al <strong>aprendizaje continuo</strong> en entornos tecnológicos cambiantes.
          </p>
        </Tilt>

        <hr className='w-full mt-3 mb-3 rounded-2xl border border-details2 dark:border-details1'/>

        <div className='flex flex-col w-full'>
          <h2 className='text-xl mb-2 w-full'>Stack principal</h2>
          <div className={`flex w-full overflow-x-auto pb-2 gap-1 ${styles.mainStackScroll}`}>

            <TechCard logo="typescript" title="TypeScript" level={90}/> 
            <TechCard logo="react" title="React.js" level={90}/> 
            <TechCard logo="next" title="Next.js" level={70}/> 
            <TechCard logo="tailwind" title="Tailwind" level={90}/> 
            <TechCard logo="css" title="CSS" level={90}/> 
            <TechCard logo="scss" title="SASS" level={80}/> 
            <TechCard logo="zustand" title="Zustand" level={60}/> 
            <TechCard logo="tanstack" title="Tanstack Query" level={100}/> 
            <TechCard logo="nodejs" title="Node.js" level={80}/> 
            <TechCard logo="express" title="Express" level={70}/> 
            <TechCard logo="postgresql" title="PostgreSQL" level={80}/> 
            <TechCard logo="prisma" title="Prisma" level={80}/> 

          </div>
        </div>
      </motion.div>
    </>
  )
}

export default AboutMe