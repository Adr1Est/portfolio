export interface Project {
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
    name: 'Tic Tac Toe',
    repo: 'https://github.com/Adr1Est/tic-tac-toe-react',
    url: 'https://tictactoe-aes.netlify.app/',
    img: '/tictactoe-screen.png',
    tools: ['react', 'javascript', 'css', 'tailwind', 'vite']
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
    name: 'AstroRadar',
    repo: 'https://github.com/Sofiaivars/AstroRadar',
    url: 'https://github.com/Sofiaivars/AstroRadar',
    img: '/astroradar-screen.png',
    tools: ['react', 'javascript', 'redux', 'css', 'tailwind', 'python', 'flask', 'sqlalchemy',]
  },
  {
    id: 4,
    name: 'AstroRadar API',
    repo: 'https://github.com/Sofiaivars/astroradar-api',
    url: 'https://github.com/Sofiaivars/astroradar-api',
    img: '/api-screen.png',
    tools: ['typescript', 'nodejs', 'express', 'prisma', 'jwt', 'postgres', 'supabase', 'docker', 'pnpm']
  },
  {
    id: 5,
    name: 'Shop Demo con Redux',
    repo: 'https://github.com/Adr1Est/shop_redux',
    url: 'https://github.com/Adr1Est/shop_redux',
    img: '/shopdemo-screen.png',
    tools: ['vite', 'react', 'redux', 'chakraui', 'pnpm']
  },
  {
    id: 6,
    name: 'Daily Bug',
    repo: 'https://github.com/Adr1Est/daily-insight',
    url: 'https://dailybug.adrianestevezs.dev/',
    img: '/dailybug-screen.png',
    tools: ['nextjs', 'typescript', 'css', 'tailwind', 'prisma', 'supabase']
  },
];

export { projectsData };