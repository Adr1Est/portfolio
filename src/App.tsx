import styles from '@/App.module.css'
import { Outlet, useLocation } from 'react-router'
import Background from '@components/Background'
import Footer from '@components/Footer'
import { useThemeClass } from '@/hooks/useThemeClass'
import { useEffect } from 'react'
import { sendDiscordMessage } from '@/services/discord'
import MetaTags from '@components/MetaTags'

function App() {
  useThemeClass()

  const location = useLocation()

  const url = typeof window !== 'undefined'
   ? window.location.origin + location.pathname
   : 'https://adrianestevezs.dev'

  useEffect(() => {
    const notify = async () => {
      await sendDiscordMessage("Alguien visitó tu portfolio!");
    }
    notify();
  }, [])
  return(
    <>
      <MetaTags 
        url={url}
      />

      <div className='min-h-screen flex flex-col items-center justify-center'>
        <Background/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
