import { ArrowBigLeft } from "lucide-react"
import { motion } from "motion/react"
import './Curriculum.css'
import { useNavigate } from "react-router"

function Curriculum(){
  const navigate = useNavigate()

  return(
    <motion.div 
      className="w-full rounded-b-2xl overflow-hidden relative"
      initial={{ height: 0 }}
      animate={{ height: 500 }}
      transition={{
        duration: 0.7,
        scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
      }}
    >
      <button className="absolute left-5 top-3 backIcon" onClick={() => navigate("/portfolio")}>
        <ArrowBigLeft/>
      </button>
      <iframe 
        src="https://drive.google.com/file/d/1ZIeBjvWhEdwQkSjy-QbJRN7g91RHyGPu/preview" 
        width="100%"
        height="500px"
      ></iframe>
    </motion.div>
  )
}

export default Curriculum