import './Me.css'
import me from '../assets/processed_image.png'
import { Github, Linkedin } from 'lucide-react'

function Me(){
  const iconStyles = {
    size: 20,
    class: "social-icons"
  }
  
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
      <div className='w-25 md:w-50 aspect-square rounded-full overflow-hidden photo-box'>
        <img src={me} alt="adrian portfolio image" className='w-full h-full object-cover' />
      </div>
      <div className='mb-1 text-center md:text-start'>
        <p className='text-2xl'>Adrián Estévez Salamanca</p>
        <p className='text-xl'>Full Stack Developer</p>
        <div className='flex flex-row gap-1 mt-1'>
          <a href="https://github.com/Adr1Est" target="_blank" rel="noopener noreferrer">
            <Github size={iconStyles.size} className={iconStyles.class}/>
          </a>
          <a href="https://www.linkedin.com/in/adrianestevezsalamanca/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={iconStyles.size} className={iconStyles.class}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Me