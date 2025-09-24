import './Me.css'
import me from '../assets/processed_image.png'
import { FileUser, Github, Linkedin } from 'lucide-react'
import { useNavigate } from 'react-router'

function Me(){
  const navigate = useNavigate()
  const iconStyles = {
    size: 20,
    class: "social-icons"
  }
  
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
      <div className='w-30 md:w-50 aspect-square rounded-full overflow-hidden photo-box'>
        <img src={me} alt="adrian portfolio image" className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col mb-1 items-center md:items-start'>
        <p className='text-2xl'>Adrián Estévez Salamanca</p>
        <p className='text-xl'>Full Stack Developer</p>
        <div className='flex flex-row gap-1 mt-1'>
          <a href="https://github.com/Adr1Est" target="_blank" rel="noopener noreferrer" title="github">
            <Github size={iconStyles.size} className={iconStyles.class} title="github"/>
          </a>
          <a href="https://www.linkedin.com/in/adrianestevezsalamanca/" target="_blank" rel="noopener noreferrer" title='linkedin'>
            <Linkedin size={iconStyles.size} className={iconStyles.class}/>
          </a>
          <button title="cv" onClick={() => navigate('/portfolio/cv')}>
            <FileUser size={iconStyles.size} className={iconStyles.class}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Me