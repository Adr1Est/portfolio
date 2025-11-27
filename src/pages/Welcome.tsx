import styles from '@pages/Welcome.module.css'
import { useNavigate } from 'react-router'
import Typewriter from '@components/Typewriter'
import StartButton from '@components/StartButton'

function Welcome(){
  const navigate = useNavigate()

  return(
    <div className='flex flex-col gap-3 justify-center items-center'>
      <p className='text-4xl flex flex-col md:flex-row text-center'>Bienvenido al portfolio de <span className={`${styles.username} ms-2 me-2`}><Typewriter text="Adr1Est" speed={100}/></span></p>
      <StartButton text="Ver" handleClick={() => navigate("/portfolio")}/>
    </div>
  )
}

export default Welcome