import './Me.css'
import me from '../assets/processed_image.png'

function Me(){
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
      <div className='w-25 md:w-50 aspect-square rounded-full overflow-hidden photo-box'>
        <img src={me} alt="adrian portfolio image" className='w-full h-full object-cover' />
      </div>
      <div className='mb-1 text-center md:text-start'>
        <p className='text-2xl'>Adrián Estévez Salamanca</p>
        <p className='text-xl'>Full Stack Developer</p>
      </div>
    </div>
  )
}

export default Me