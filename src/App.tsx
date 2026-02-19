import styles from '@/App.module.css'
import { Outlet } from 'react-router'
import Background from '@components/Background'
import Footer from '@components/Footer'
import { useThemeClass } from '@/hooks/useThemeClass'

function App() {
  useThemeClass()
  return(
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <Background/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
