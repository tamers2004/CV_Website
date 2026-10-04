export const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export const socials = {
  github: 'https://github.com/tamers2004',
  linkedin: 'https://www.linkedin.com/in/tamer-satel-4b112a2b6/',
  email: 'tamers2004@gmail.com',
  phone: '+972 54-6833507',
  cv: `${import.meta.env.BASE_URL}Tamer_Satel_FullStack.pdf`,
}

export const projects = [
  {
    title: 'Shomer Ahi',
    field: 'Emergency Response Platform',
    description:
      'Full-stack platform for armed civilians and security forces. Real-time event tracking, emergency response, weapon theft prevention. Built with React Native, React.js, and Firebase.',
    tags: ['React', 'React Native', 'Firebase', 'Real-time'],
  },
  {
    title: 'Paper Trader Pro',
    field: 'Stock Trading Simulation',
    description:
      'Virtual cryptocurrency trading platform with buy/sell, portfolio management, real-time balance tracking, and market-style UI. Built with React, Express.js, Node.js, and MySQL.',
    tags: ['React', 'Express.js', 'Node.js', 'MySQL'],
  },
  {
    title: 'SmartBasket',
    field: 'Price Comparison Platform',
    description:
      'Full-stack grocery price comparison platform with shopping lists and basket comparisons across supermarket chains. Built REST APIs and managed product and pricing data using MySQL.',
    tags: ['React', 'Express.js', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'Mobile Sudoku Game',
    field: 'Published Mobile Game',
    description:
      'Cross-platform Sudoku app published on Google Play. Board generation, difficulty levels (Easy/Medium/Hard), persistent game state via AsyncStorage.',
    tags: ['React Native', 'Expo', 'Tailwind CSS', 'Google Play'],
  },
  {
    title: 'Cyber Drift',
    field: '3D Browser Racing Game',
    description:
      'Browser-based 3D racing game set in a neon cyberpunk city. Drifting, nitro boosts, dynamic weather, day/night cycles, AI opponents, unlockable vehicles, and local high scores. Built with Three.js, Rapier physics, and Zustand.',
    tags: ['React', 'Three.js', 'React Three Fiber', 'Rapier', 'Zustand', 'Tailwind CSS'],
    link: { label: 'Live Demo', href: 'https://lnkd.in/dMdSSqjs' },
  },
  {
    title: 'Sineen Web',
    field: 'Interactive Business Website',
    description:
      'Responsive website for a professional piercing studio. Service and pricing sections, clean visual design, and smooth interactions. Built as a polished frontend experience with React, TypeScript, and Tailwind CSS.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    link: { label: 'GitHub', href: 'https://github.com/tamers2004/Sineen_Web_2026' },
  },
]

export const skillGroups = [
  {
    name: 'Frontend',
    skills: ['React', 'React Native', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    name: 'Backend & Data',
    skills: ['Node.js', 'Express.js', 'Firebase', 'MySQL', 'SQL', 'REST APIs'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Linux', 'Debugging'],
  },
]

export const experience = {
  period: '2025 – Present',
  role: 'Technical Support Specialist',
  company: 'Cardcom',
  summary:
    'Provide technical support and troubleshoot issues across web-based applications, APIs, databases, and system integrations.',
  bullets: [
    'Investigate system errors, analyze logs, and reproduce technical issues to identify root causes.',
    'Work with development and technical teams to resolve application bugs and improve system reliability.',
    'Use SQL, REST APIs, and debugging techniques to investigate data and application-related issues.',
  ],
  tech: ['SQL', 'REST APIs', 'Web Applications', 'Databases', 'Debugging', 'Linux', 'Git'],
}

export const education = [
  {
    period: '2022 – 2025',
    title: 'B.Sc. in Computer Science',
    place: 'Holon Institute of Technology',
    detail:
      'Specialized in Full-Stack development with a focus on data structures, algorithms, operating systems, and software engineering.',
  },
  {
    period: 'Grades 10 – 12',
    title: 'High School Computer Science',
    place: null,
    detail:
      'Completed three years of high school computer science (Grades 10-12), building foundational knowledge.',
  },
]
