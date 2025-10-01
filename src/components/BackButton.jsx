import { ArrowBigLeft } from "lucide-react"
import { useNavigate } from "react-router"

function BackButton({to, styles}){
  const navigate = useNavigate()
  return (
    <button className={styles} onClick={() => navigate(to)}>
      <ArrowBigLeft/>
    </button> 
  )
}

export default BackButton