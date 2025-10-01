import { motion } from "motion/react"
import { getAge } from "../data/age"
import BackButton from "../components/BackButton"

function AboutMe(){
  const age = getAge()
  return (
    <>
      <BackButton to={'/portfolio'} styles={'backIcon'} />
      <motion.div 
        className="flex flex-row p-1 w-full"
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        transition={{
          duration: 0.7,
          scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
        }}
      >
        <div className="flex flex-col gap-1 w-full aboutme-box">
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
      </motion.div>
    </>
  )
}

export default AboutMe