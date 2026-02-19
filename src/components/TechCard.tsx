import styles from '@/components/TechCard.module.css'

interface Props{
  logo: string;
  title: string;
  level: number;
}

export default function TechCard({ logo, title, level }: Props){
  return(
    <div className={`${styles.techCardMain} flex flex-col items-center justify-center shrink-0`}>
      <div className='flex flex-row items-center gap-1 self-start'>
        <div>
          <img src={`https://go-skill-icons.vercel.app/api/icons?i=${logo}`} alt={`logo de ${logo}`} />
        </div>
        <h2 className='self-end font-semibold'>{ title }</h2>
      </div>

      <div className={`${styles.levelContainer} mt-2`}>
        <div className={`bg-details2 dark:bg-details1 text-white dark:text-first-dark ${styles.levelBar}`} style={{width: `${level}%`}}>
          {level}%
        </div>
      </div>
    </div>
  )
}