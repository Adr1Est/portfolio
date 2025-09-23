import { useEffect, useState } from 'react'
import Me from '../components/Me'
import Stack from '../components/Stack'
import Loader from '../components/Loader'

function Portfolio(){
  const [isLoaded, setIsLoaded] = useState()
  
  useEffect(() => {
    if(!isLoaded){
      setTimeout(() => {
        setIsLoaded(true)
      }, 2000)
    }
  }, [isLoaded])

  if(!isLoaded){
    return (
      <div className='flex flex-col items-center justify-center gap-1 rounded-2xl w-full lg:w-200 md:w-150 p-3'>
        <Loader text="Hi"/>
      </div>
    )
  }
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