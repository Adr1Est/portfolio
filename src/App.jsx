import { useState } from 'react'
import './App.css'
import Me from './components/Me'
import Stack from './components/Stack'
import Typewriter from './components/Typewriter.jsx'
import StartButton from './components/startButton.jsx'

function App() {
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = () => {
    setIsPressed(true)
  }

  if(!isPressed){
    return (
      <div className='flex flex-col gap-3 justify-center items-center'>
        <p className='text-4xl flex flex-col md:flex-row text-center'>Welcome to <span className='username ms-2 me-2'><Typewriter text="Adr1Est's" speed={100}/></span> portfolio</p>
        <StartButton text="Dive in" handleClick={handleClick}/>
      </div>
    )
  }else{
    return (
      <>
        <div className='flex flex-col gap-1 rounded-2xl w-full lg:w-200 md:w-150 p-3 main-container'>
          <Me/>
          <hr className='mt-3 mb-3 rounded-2xl separator'/>
          <Stack/>
        </div>
      </>
    )
  }
}

export default App
