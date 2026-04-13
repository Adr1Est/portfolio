export interface Project {
  id: number;
  name: string;
  repo: string;
  url: string;
  img: string;
  tools: string[];
}

const projectsData: Project[] = [
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
    url: 'https://shopdemo-react.netlify.app/',
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
  {
    id: 7,
    name: 'ToDo List | React Native',
    repo: 'https://github.com/Adr1Est/todo-react-native',
    url: 'https://github.com/Adr1Est/todo-react-native',
    img: '/todolistreactnative-screen.png',
    tools: ['reactnative', 'expo', 'zustand']
  },
  {
    id: 8,
    name: 'Weather Card | Lit',
    repo: 'https://github.com/Adr1Est/weather-card-lit',
    url: 'https://minimalist-weathercard.netlify.app/',
    img: '/weathercard-screen.png',
    tools: ['pnpm', 'vite', 'lit', 'api']
  },
  {
    id: 9,
    name: 'Poke Info',
    repo: 'https://github.com/Adr1Est/poke-info',
    url: 'https://poke-info-eta.vercel.app/',
    img: '/pokeinfo-screen.png',
    tools: ['pnpm', 'next', 'react', 'zustand', 'tanstack', 'api', 'jest', 'docker']
  },
  {
    id: 10,
    name: 'Better Components API REST',
    repo: 'https://github.com/Adr1Est/better-components-api',
    url: 'https://better-components-api.vercel.app/health',
    img: '/api-screen.png',
    tools: ['pnpm', 'nodejs', 'express', 'typescript', 'prisma', 'postgresql', 'supabase', 'docker', 'jwt', 'gemini']
  },
  {
    id: 11,
    name: 'Better Components',
    repo: 'https://github.com/Adr1Est/better-components',
    url: 'https://bettercomponents.adrianestevezs.dev/',
    img: '/bettercomponents-screen.png',
    tools: ['pnpm', 'react', 'reactrouter', 'vite', 'typescript', 'tailwind', 'zustand', 'tanstack', 'axios']
  },
];

export { projectsData };