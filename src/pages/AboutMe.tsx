import './AboutMe.css'
import { motion } from "motion/react"
import BackButton from "../components/BackButton"
import Tilt from 'react-parallax-tilt'

function AboutMe(){
  return (
    <>
      <BackButton to={'/portfolio'} stylesFromParent={'self-start backIcon'} />
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
          glareColor="white"
          glarePosition="all"
          glareBorderRadius="15px"
        >
          <div className="flex flex-col gap-1 p-3 w-full aboutme-box">
            <p className="text-justify">
                <strong>Desarrollador Front-end</strong> con más de 2 años de experiencia en <b>React</b>,
                <strong> TypeScript</strong> y <strong>Node.js</strong>.
                Actualmente, amplío mis conocimientos en <strong>Python</strong>, <strong>Flask</strong>,
                <strong> SQL</strong>,
                <strong> IA</strong> y el uso de <strong>ORMs</strong> para fortalecer mi perfil Full Stack.
                Apasionado por la <strong>innovación</strong> y el <strong>aprendizaje continuo</strong>, destaco por mi
                <strong> curiosidad</strong>, <strong>autonomía</strong> y <strong>capacidad de adaptación</strong> a
                nuevos entornos y tecnologías.
            </p>
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}

export default AboutMe