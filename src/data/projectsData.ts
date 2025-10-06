interface Project {
  id: number;
  name: string;
  repo: string;
  url: string;
  img: string;
  tools: string[];
}
type ProjectsArr = Project[]

const projectsData: ProjectsArr = [
  {
    id: 1,
    name: 'AstroRadar',
    repo: 'https://github.com/Sofiaivars/AstroRadar',
    url: 'https://github.com/Sofiaivars/AstroRadar',
    img: '/astroradar-screen.png',
    tools: ['react', 'javascript', 'redux', 'css', 'tailwind', 'python', 'flask', 'sqlalchemy',]
  },
  {
    id: 2,
    name: 'Binary Clock',
    repo: 'https://github.com/Adr1Est/binary-clock-react',
    url: 'https://binary-clock-aes.netlify.app/',
    img: '/binaryclock-screen.png',
    tools: ['react', 'javascript', 'css', 'tailwind', 'vite']
  },
  {
    id: 3,
    name: 'Tic Tac Toe',
    repo: 'https://github.com/Adr1Est/tic-tac-toe-react',
    url: 'https://tictactoe-aes.netlify.app/',
    img: '/tictactoe-screen.png',
    tools: ['react', 'javascript', 'css', 'tailwind', 'vite']
  },
];

export { projectsData };