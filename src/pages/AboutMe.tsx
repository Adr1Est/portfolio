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
        className="flex flex-col p-1 w-full overflow-hidden"
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
            Desarrollador Full-Stack con <strong>más de 2 años de experiencia</strong> en el desarrollo de aplicaciones 
            utilizando <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> y <strong>Node.js</strong>.
            He participado activamente en el desarrollo de aplicaciones web complejas, contribuyendo a la <strong>optimización del tiempo de carga en un 30%</strong> y 
            a la mejora de la eficiencia del código mediante la implementación de <strong>buenas prácticas</strong> y <strong>código limpio y escalable</strong>.
          </p>
        </Tilt>

        <hr className='w-full mt-3 mb-3 rounded-2xl border border-details2 dark:border-details1'/>

        <div className='flex flex-col items-center w-full overflow-hidden'>
          <h2 className='text-xl mb-2 w-full'>Stack principal</h2>
          <div className={`flex w-85 sm:w-150 md:w-full overflow-x-auto pb-2 gap-1 h-25 ${styles.mainStackScroll}`}>

            <TechCard logo="typescript" title="TypeScript" level={90}/> 
            <TechCard logo="react" title="React.js" level={90}/> 
            <TechCard logo="next" title="Next.js" level={80}/> 
            <TechCard logo="tailwind" title="Tailwind" level={90}/> 
            <TechCard logo="css" title="CSS" level={90}/> 
            <TechCard logo="scss" title="SASS" level={80}/> 
            <TechCard logo="zustand" title="Zustand" level={80}/> 
            <TechCard logo="tanstack" title="Tanstack Query" level={80}/> 
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