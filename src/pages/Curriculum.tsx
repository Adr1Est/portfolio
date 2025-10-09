import { motion } from "motion/react"
import './Curriculum.css'
import BackButton from "../components/BackButton"

function Curriculum(){

  return(
    <motion.div 
      className="w-full m-5 md:m-0 rounded-b-2xl overflow-hidden relative"
      initial={{ height: 0 }}
      animate={{ height: 500 }}
      transition={{
        duration: 0.7,
        scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
      }}
    >
      <BackButton to={'/portfolio'} styles={"absolute left-5 top-3 backIcon"}/>
      <iframe 
        src="https://drive.google.com/file/d/1pmPY0KDiofozrwkOiGOnf2DAieY0Btju/preview"view?usp=drive_link
        width="100%"
        height="500px"
      ></iframe>
    </motion.div>
  )
}

export default Curriculum