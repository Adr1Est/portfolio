import styles from '@pages/AboutMe.module.css'
import { motion } from "motion/react"
import BackButton from "@components/BackButton"
import Tilt from 'react-parallax-tilt'

function AboutMe(){
  return (
    <>
      <BackButton to={'/portfolio'} stylesFromParent={'self-start'} />
      <motion.div 
        className="flex flex-row p-1 w-full"
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
        >
          <div className={`flex flex-col gap-1 p-3 w-full ${styles.aboutmeBox}`}>
            <p className="text-justify">
                <strong>Desarrollador Front-end</strong> con más de 2 años de experiencia en aplicaciones web modernas.<br/>
                Especializado en <strong>React/Next.js</strong> y <strong>TypeScript</strong>, con conocimientos <strong>Back-end</strong> en <strong>Node.js</strong> y <strong>Flask</strong>.<br/>
                Perfil <strong>autodidacta</strong>, <strong>adaptable</strong> y orientado al <strong>aprendizaje continuo</strong> en entornos tecnológicos cambiantes.
            </p>
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}

export default AboutMe