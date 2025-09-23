import './Stack.css'
import Marquee from 'react-fast-marquee'

function Stack(){
  const iconClass = `toolIcon transition-all duration-200`
  const myStack = ['html', 'css', 'javascript', 'react', 'redux', 'vite', 'tailwind', 'bootstrap', 'python', 'flask', 'sqlalchemy', 'nodejs', 'express', 'api', 'git', 'github', 'netlify', 'vercel', 'render', 'docker']

  return (
    <div className='flex flex-col w-full gap-3'>
      <p className='text-xl'>Stack</p>
      <Marquee className='stack-container' pauseOnHover>
        {myStack.map(tool => <img src={`https://go-skill-icons.vercel.app/api/icons?i=${tool}`}alt={`${tool} icon`} className={iconClass}/>)}
      </Marquee>
    </div>
  )
}

export default Stack