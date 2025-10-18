import type { NavLink, Skill, Project, WorkExperienceItem, EducationItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Knockout.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: '.NET Core', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  { name: 'C#', category: 'Backend' },
  { name: 'Entity Framework', category: 'Backend' },
  { name: 'WinForms', category: 'Backend' },
  { name: 'Desktop Development', category: 'Backend' },
  { name: 'SQL Server', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Firebase', category: 'Database' },
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Van Rent Application',
    description: 'A web application for van owners and drivers to manage student rent collection and vehicle expenses. The owner can oversee all transactions, confirm payments, and view monthly financial summaries, while drivers can record rent payments and log operational costs.',
    image: 'assets/vanrent.png',
    liveLink: 'https://van-rent.vercel.app/',
  },
  {
    title: 'HorizonLab Application',
    description: 'The software includes features for making necessary improvements and conducting maintenance based on business requirements. This aids in enhancing the software stability and management.',
    image: 'assets/horizonlab.png',
  },
  {
    title: 'Stop Watch Using JS',
    description: 'This stopwatch is built using pure JavaScript. It allows users to start, pause, reset, and track time in real-time. The timer updates every second (or millisecond based on configuration) and displays the elapsed time in minutes and seconds format.',
    image: 'assets/stopwatch.png',
    githubLink: 'https://github.com/adilwaheed786/JavaScript_StopWatch',
    liveLink: 'https://adilwaheed786.github.io/JavaScript_StopWatch/',
  },
];

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Dotnet Report Builder',
    duration: 'Feb 2024 - Present',
    description: 'Developing and enhancing a dynamic report building solution using .NET technologies. Responsible for both front-end and back-end components to deliver powerful data visualization and reporting tools to clients in the United States.',
    isCurrent: true,
  },
  {
    role: '.NET Developer',
    company: 'NettCore',
    duration: 'Jul 2022 - Mar 2023',
    description: 'Developed and maintained .NET applications. Worked on-site in Karachi, contributing to the full software development lifecycle from conception to deployment.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor's in Software Engineering",
    institution: 'Bahria University Karachi Campus',
    year: '2023',
  },
  {
    degree: 'Intermediate',
    institution: 'Bahria College Majeed SRE, Karachi',
    year: '2017 - 2019',
  },
];

export const CONTACT_INFO = {
  email: 'adilwaheed2222.com@gmail.com',
  github: 'https://github.com/adilwaheed786',
  whatsapp: 'https://wa.me/923212347886',
  linkedin: 'https://www.linkedin.com/in/engr-adil-waheed-300205201/',
  cvPath: 'assets/AdilWaheed.pdf',
};