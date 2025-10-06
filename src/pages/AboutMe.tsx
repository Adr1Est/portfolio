import './AboutMe.css'
import { motion } from "motion/react"
import { getAge } from "../data/age"
import BackButton from "../components/BackButton"
import Tilt from 'react-parallax-tilt'

function AboutMe(){
  const age: number = getAge()
  return (
    <>
      <BackButton to={'/portfolio'} styles={'self-start backIcon'} />
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
              Hola, soy Adrián Estévez Salamanca de {age} años y vivo en Madrid, España.
            </p>
            <p className="text-justify">
              Soy <strong>Desarrollador Full Stack</strong> con experiencia en 
              <strong> React</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Python</strong> y <strong>SQL</strong>. 
              Me apasiona la <strong>innovación tecnológica</strong> y el <strong>aprendizaje constante</strong>, lo que me impulsa 
              a estar siempre explorando nuevas herramientas.
            </p>
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}

export default AboutMe