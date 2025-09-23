import './Stack.css'

function Stack(){
  const iconClass = `toolIcon transition-all duration-200`

  return (
    <div className='flex flex-col gap-3'>
      <p className='text-xl'>Stack</p>
      <div className='flex flex-row gap-3 max-w-150 overflow-y-auto p-2 stack-container'>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=html" alt="html icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=css" alt="css icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=javascript" alt="javascript icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=react" alt="react icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=redux" alt="redux icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=vite" alt="vite icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=tailwind" alt="vite icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=bootstrap" alt="bootstrap icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=python" alt="python icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=flask" alt="flask icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=sqlalchemy" alt="sqlalchemy icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=nodejs" alt="nodejs icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=express" alt="express icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=api" alt="api icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=git" alt="git icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=github" alt="github icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=netlify" alt="netlify icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=vercel" alt="vercel icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=render" alt="render icon" className={iconClass}/>
        <img src="https://go-skill-icons.vercel.app/api/icons?i=docker" alt="docker icon" className={iconClass}/>
      </div>
    </div>
  )
}

export default Stack