import { ArrowBigLeft } from "lucide-react"
import { useNavigate } from "react-router"

interface BackButtonProps { to: string; styles: string; }

function BackButton({to, styles}: BackButtonProps){
  const navigate = useNavigate()
  return (
    <button className={styles} onClick={() => navigate(to)}>
      <ArrowBigLeft/>
    </button> 
  )
}

export default BackButton