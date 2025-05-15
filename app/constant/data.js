export const NavLinksData = [
  { route: '/', title: 'Home' },
  { route: '/about', title: 'About' },
  { route: '/portfolio', title: 'Portfolio' },
  { route: '/contact', title: 'Contact' },
];

const SmartPrepTechStack = [
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Google API',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  },
  { name: 'ChatGPT', icon: '/chatGpt.svg' },
];

const ProManageTechStack = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
];

const MovieAppTechStack = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  { name: 'AJAX', icon: '/ajax.svg' },
];

const ObysTechStack = [
   {
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
];

export const projects = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'SmartPrep - Your Realtime AI Interviewer',
    desc: ' Designed and Developed an AI-powered interview simulation tool that customizes questions based on user-provided inputs such as experience, role, and interview goals. Implemented real-time AI-driven interactions to dynamically conduct interviews, adapting follow-up questions based on user responses.Leveraged OpenAI’s ChatGPT along with Vapi AI Agent for seamless real-time interview conduction and feedbacks for improvement.',
    img: '/InterviewAI.png',
    link: 'https://prep-smart-eta.vercel.app/',
    shadowColor: 'red',
    video: '../../PrepSmartAIDemo.mp4',
    techStack: SmartPrepTechStack,
    gradientEffect: 'gradient-anim2',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'ProManage - Agile Methodology Kanban Board',
    desc: 'Users can easily create, share, and assign tasks to others and monitor task deadlines to ensure timely completion.Select task priority levels and add detailed checklists for organized task execution. User can effectively change tasks status from [backlog, todo, done, in-progress] for realtime stats & includes login and logout functionality for secure access.',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://pro-manage-fd.vercel.app/',
    shadowColor: 'red',
    video: '../../ProManageDemo.mp4',
    techStack: ProManageTechStack,
    gradientEffect: 'gradient-anim3',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title:
      'MovieApp - One Place For All Your Movies Hunting.',
    desc: 'Simplify your entertainment search with this responsive web app, designed to help you quickly find the perfect Movie or TV show.This app simplifies your entertainment search with global features for trailers, ratings, similar content, and OTT streaming info.Quickly find what you want, whether by actor or genre, stay updated with trending and popular shows,movies and enjoy more watching with less searching.',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://movie-app-chaitanya.vercel.app/',
    shadowColor: 'violet',
    video: '../../MovieDemo.mp4',
    techStack: MovieAppTechStack,
    gradientEffect: 'gradient-anim4',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Obys Agency Clone',
    desc: 'Locomotive Scroll for smooth, seamless scrolling. SheryJs library to replicate innovative effects and enhance interactivity.ThreeJS for stunning visual effects and GSAP for dynamic animations.',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://major-project-chaitanya.vercel.app/',
    shadowColor: 'green',
    video: '../../ObysDemo.mp4',
    techStack: ObysTechStack,
    gradientEffect: 'gradient-anim5',
  },
];
