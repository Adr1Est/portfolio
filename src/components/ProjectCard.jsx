import Marquee from 'react-fast-marquee'
import { Github } from 'lucide-react'

function ProjectCard({project}){
  return (
    <div className="flex flex-col gap-1 w-70 h-70 rounded-2xl project-card">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div className='w-full h-40 cursor-pointer'>
          <img src={project.img} alt={`${project.name} project image`} className='w-full h-full object-cover'/>
        </div>
      </a>
      <div className='flex flex-col gap-1 p-1'>
        <p className='text-lg'>{project.name}</p>
        <Marquee className='mt-1 tools' autoFill>
          {project.tools.map(tool => {
            return <img src={`https://go-skill-icons.vercel.app/api/icons?i=${tool}`} alt={`${tool} icon`} className='projectTools' title={tool}/>
          })}
        </Marquee>
        <div className='flex flex-row justify-center items-center mt-3'>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Github size={20} className='repoLink'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard