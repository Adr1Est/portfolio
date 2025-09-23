import { useNavigate } from 'react-router'
import Typewriter from '../components/Typewriter.jsx'
import StartButton from '../components/StartButton.jsx'

function Welcome(){
  const navigate = useNavigate()

  return(
    <div className='flex flex-col gap-3 justify-center items-center'>
      <p className='text-4xl flex flex-col md:flex-row text-center'>Welcome to <span className='username ms-2 me-2'><Typewriter text="Adr1Est's" speed={100}/></span> portfolio</p>
      <StartButton text="Dive in" handleClick={() => navigate("/portfolio")}/>
    </div>
  )
}

export default Welcome