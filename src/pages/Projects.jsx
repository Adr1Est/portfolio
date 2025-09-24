import './Projects.css'
import { projectsData } from '../data/projectsData'
import Marquee from 'react-fast-marquee'
import { Github } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

function Projects(){
  return (
    <div className="flex flex-row gap-3 w-full overflow-x-auto projects-container">
      <Tilt tiltReverse={true}>
        <div className="flex flex-col gap-1 w-70 h-70 rounded-2xl project-card">
          <div className='w-full h-40 cursor-pointer'>
            <img src={projectsData[0].img} alt={`${projectsData[0].name} project image`} className='w-full h-full object-cover'/>
          </div>
          <div className='flex flex-col gap-1 p-1'>
            <p className='text-lg'>{projectsData[0].name}</p>
            <Marquee className='mt-1 tools' autoFill>
              {projectsData[0].tools.map(tool => {
                return <img src={`https://go-skill-icons.vercel.app/api/icons?i=${tool}`} alt={`${tool} icon`} className='projectTools' title={tool}/>
              })}
            </Marquee>
            <div className='flex flex-row justify-center items-center mt-3'>
              <a href={projectsData[0].repo}><Github size={20} className='repoLink'/></a>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

export default Projects