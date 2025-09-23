import './Me.css'
import me from '../assets/processed_image.png'

function Me(){
  return (
    <div className='flex flex-row items-end gap-3'>
      <div className='w-50 aspect-square rounded-full overflow-hidden photo-box'>
        <img src={me} alt="adrian portfolio image" className='w-full h-full object-cover' />
      </div>
      <div className='mb-1'>
        <p className='text-2xl'>Adrián Estévez Salamanca</p>
        <p className='text-xl'>Full Stack Developer</p>
      </div>
    </div>
  )
}

export default Me