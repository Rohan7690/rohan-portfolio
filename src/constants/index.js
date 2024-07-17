
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    python,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    rightlabs,
    bootstrap,
    postmanapi,
    chakara,
    letschat,
    ghumantu,
    celebal_logo,
    carepulse,
  } from "../assets";


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "git",
      icon: git,
    },

    {
      name: "Postman Api",
      icon: postmanapi,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Chakara UI",
      icon: chakara,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "python",
      icon: python,
    },
    
  ];
  
  const experiences = [
    {
      title: "Celebal Summer Intern",
      company_name: "Celebal Technology",
      icon: celebal_logo,
      iconBg: "#383E56",
      date: "June 2024 - July 2024",
      points: [
        "Completed intensive coursework on Node.js, focusing on Express and Node modules.",
        "Developed RESTful APIs, utilizing best practices for database integration and data management.",
        "Gained practical experience with async/await to handle asynchronous operations efficiently.",
        "Worked on projects that involved building and managing databases within a Node.js environment.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "RightLabs",
      icon: rightlabs,
      iconBg: "#383E56",
      date: "July 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
    name: "Care Pulse",
    description:
      "CarePulse is a healthcare-focused application to facilitate appointment scheduling and management.Integrated Twilio for automated SMS notifications, enhancing appointment confirmations and cancellation.",
    tags: [
      {
        name: "NextJs14",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
    ],
    image: carepulse,
    source_code_link: "https://github.com/Rohan7690/carePulse",
    live_link:'https://care-pulse-otss1act6-rohan7690s-projects.vercel.app/',
  },
    {
      name: "Lets Chat Web App",
      description:
        "A Real-time chat web application offering one-on-one and group chat experiences . With user authentication to enhance data security, including user registration and login. Created API which can manage fronted requests and provide data from backend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "chakara UI",
          color: "pink-text-gradient",
        },
        {
          name: "express js",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "blue-text-gradient",
        },
      ],
      image: letschat,
      source_code_link: "https://github.com/Rohan7690/LetsChat-Deploy",
      live_link:'https://letschat-bg1b.onrender.com/',
    },
    {
      name: "Ghumantu Website",
      description:
        "Developed the website's UI using Chakra UI framework, ensuring an intuitive user experience.Ensured full responsiveness across various devices and screen sizes for broad accessibility.Utilized Git/GitHub for version control, allowing for efficient code management and collaboratio",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chakara UI",
          color: "green-text-gradient",
        },
        {
          name: "fade aos",
          color: "pink-text-gradient",
        },
      ],
      image: ghumantu,
      source_code_link: "https://github.com/Rohan7690/ghumantu-landing",
      live_link:'https://ghumantu-landing.vercel.app/',
    },
    
  ];

  const progress = [
    {
      name:'HTML',
      number:'90%'
    },
    {
      name:'CSS',
      number:'90%'
    },
    {
      name:'JavaScript',
      number:'80%'
    },
    {
      name:'ReactJS',
      number:'80%'
    },
    {
      name:'Nextjs14',
      number:'80%'
    },
    {
      name:'Typescript',
      number:'60%'
    },
    {
      name:'Postman API',
      number:'70%'
    },
    {
      name:'Tailwind Css',
      number:'80%'
    },
    {
      name:'Bootstrap',
      number:'90%'
    },
    {
      name:'Chakara UI',
      number:'90%'
    }
    ,
    {
      name:'Shadcn',
      number:'80%'
    },
    {
      name:'Appwrite',
      number:'80%'
    },
    {
      name:'mysql',
      number:'70%'
    },
    
    {
      name:'Twilio',
      number:'60%'
    },
    {
      name:'Git/Github',
      number:'80%'
    },
    {
      name:'NodeJs',
      number:'70%'
    },
    {
      name:'ExpressJs',
      number:'70%'
    },
    {
      name:'MongoDB',
      number:'80%'
    },
    {
      name:'Python',
      number:'60%'
    },
    {
      name:'C++',
      number:'80%'
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects,progress };