import { useEffect, useState } from 'react'
import Me from '../components/Me'
import StackAndButtons from '../components/StackAndButtons'
import Loader from '../components/Loader'
import { motion } from "motion/react"
import { Outlet } from 'react-router'

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
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
      }}
      className='flex flex-col gap-1 rounded-2xl w-full lg:w-200 md:w-150 p-3 main-container'
    >
      <Me/>
      <hr className='mt-3 mb-3 rounded-2xl separator'/>
      <Outlet/>
    </motion.div>
  )
}

export default Portfolio