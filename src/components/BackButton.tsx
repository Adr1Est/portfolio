import styles from './BackButton.module.css'
import { ArrowBigLeft } from "lucide-react"
import { useNavigate } from "react-router"

interface BackButtonProps { to: string; stylesFromParent: string; }

function BackButton({to, stylesFromParent}: BackButtonProps){
  const navigate = useNavigate()
  return (
    <button className={`${stylesFromParent} ${styles.backIcon}`} onClick={() => navigate(to)}>
      <ArrowBigLeft/>
    </button> 
  )
}

export default BackButton