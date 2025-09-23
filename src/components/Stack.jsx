import './Stack.css'
import Marquee from 'react-fast-marquee'

function Stack(){
  const iconClass = `toolIcon transition-all duration-200`
  const myStack = ['html', 'css', 'javascript', 'react', 'redux', 'vite', 'tailwind', 'bootstrap', 'python', 'flask', 'sqlalchemy', 'nodejs', 'express', 'api', 'git', 'github', 'netlify', 'vercel', 'render', 'docker']

  return (
    <div className='flex flex-col gap-3 w-full'>
      <p className='text-xl'>Stack</p>
      <Marquee className='stack-container' pauseOnHover gradient={false}>
        {myStack.map(tool => <img src={`https://go-skill-icons.vercel.app/api/icons?i=${tool}`}alt={`${tool} icon`} className={iconClass} title={tool}/>)}
      </Marquee>
    </div>
  )
}

export default Stack