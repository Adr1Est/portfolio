import styles from './App.css'
import { Outlet } from 'react-router'
import Background from './components/Background'

function App() {
  return(
    <>
      <Background/>
      <Outlet/>
    </>
  )
}

export default App
