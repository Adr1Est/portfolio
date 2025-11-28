import styles from '@components/ThemeToggle.module.css'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

function ThemeToggle(){
  const [theme, setTheme] = useState('dark');

  const themeSelector = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || 'dark';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark')
  }, [])

  return(
    <button 
      className={`${styles.themeButton} rounded-full p-2 absolute right-1 top-1 cursor-pointer hover:text-details1`}
      onClick={themeSelector}
    >
      {theme === "dark" ? <Sun size={20}/> : <Moon size={20}/>}
    </button>
  )
}

export default ThemeToggle