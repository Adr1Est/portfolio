import { useState } from 'react'
import './App.css'
import Me from './components/Me'
import Stack from './components/Stack'

function App() {
  const [isPressed, setIsPressed] = useState(true)

  if(isPressed){
    return (
      <div>
        <p className='text-4xl'>Welcome to <span className='username'>Adr1Est's</span> portfolio</p>
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
