import styles from '@/App.module.css'
import { Outlet } from 'react-router'
import Background from '@components/Background'
import Footer from '@components/Footer'
import { useThemeClass } from '@/hooks/useThemeClass'

function App() {
  useThemeClass()
  return(
    <>
      <Background/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
