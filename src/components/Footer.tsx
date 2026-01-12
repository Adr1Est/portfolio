import { getYear } from '@/lib/getYear'
import styles from '@components/Footer.module.css'

export default function Footer(){
  return(
    <div className={styles.footerMain}>
      <p className='opacity-30 text-sm'>&copy; {getYear()} Desarrollado por Adrián Estévez</p>
    </div>
  )
}