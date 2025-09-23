import Me from '../components/Me'
import Stack from '../components/Stack'

function Portfolio(){
  return (
    <div className='flex flex-col gap-1 rounded-2xl w-full lg:w-200 md:w-150 p-3 main-container'>
      <Me/>
      <hr className='mt-3 mb-3 rounded-2xl separator'/>
      <Stack/>
      <hr className='mt-3 mb-3 rounded-2xl separator'/>
    </div>
  )
}

export default Portfolio