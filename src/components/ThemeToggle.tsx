import { useThemeStore } from '@/store'
import styles from '@components/ThemeToggle.module.css'
import { Sun, Moon } from 'lucide-react'

function ThemeToggle(){
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return(
    <button 
      className={`${styles.themeButton} group rounded-full p-2 absolute right-1 top-1 cursor-pointer hover:text-details2 dark:hover:text-details1`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun size={20} className='group-hover:scale-110 transition-all ease-out duration-500'/> : <Moon size={20} className='group-hover:scale-110 transition-all ease-out duration-500'/>}
    </button>
  )
}

export default ThemeToggle