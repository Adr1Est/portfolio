import { useState } from 'react'
import './App.css'
import Me from './components/Me'
import Stack from './components/Stack'
import Typewriter from './components/Typewriter.jsx'
import StartButton from './components/startButton.jsx'

function App() {
  const [isPressed, setIsPressed] = useState(true)

  if(isPressed){
    return (
      <div className='flex flex-col gap-1 justify-center items-center'>
        <p className='text-4xl flex'>Welcome to <span className='username ms-2 me-2'><Typewriter text="Adr1Est's" speed={100}/></span> portfolio</p>
        <StartButton />
      </div>
    )
  }else{
    return (
      <>
        <div className='flex flex-col gap-1 rounded-2xl p-3 shadow-sm  main-container'>
          <Me/>
          <hr className='mt-3 mb-3'/>
          <Stack/>
        </div>
      </>
    )
  }
}

export default App
