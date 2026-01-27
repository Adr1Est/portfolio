import { useThemeStore } from '@/store'
import styles from '@components/Background.module.css'
import { ShootingStars } from '@components/ui/shadcn-io/shooting-stars'

function Background() {
  const theme = useThemeStore((state) => state.theme)

  return(
    <div className={`${styles.mainBackground} bg-first-light dark:bg-first-dark`}>
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(255,255,255,0)_70% dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className={`${theme === 'dark' ? styles.stars_dark : styles.stars} absolute inset-0` }/>
      </div>

      <ShootingStars
        starColor="#F2F2F2"
        trailColor="#D10000"
        minSpeed={15}
        maxSpeed={33}
        minDelay={2000}
        maxDelay={4200}
      />
      <ShootingStars
        starColor="#F2F2F2"
        trailColor="#D10000"
        minSpeed={15}
        maxSpeed={33}
        minDelay={2500}
        maxDelay={4200}
      />
      <ShootingStars
        starColor="#F2F2F2"
        trailColor="#D10000"
        minSpeed={15}
        maxSpeed={33}
        minDelay={3000}
        maxDelay={4200}
      />
        
    </div>
  )
}

export default Background