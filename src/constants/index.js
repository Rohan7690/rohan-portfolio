
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
    rohanPortfolio,
    bootstrap,
    postmanapi,
    chakara,
    letschat,
    ghumantu
  } from "../assets";
// import bootstrap from '../assets';

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
      title: "Frontend Developer Intern",
      company_name: "RightLabs",
      icon: rightlabs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
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
    {
      name: "Rohan Portfolio Website",
      description:
        "Created my 3d portfolio website using ThreeJS : a powerful 3D graphics library and React Three Fiber : a popular library for creating 3D graphics with ThreeJS in React",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "framer",
          color: "green-text-gradient",
        },
      ],
      image: rohanPortfolio,
      source_code_link: "https://github.com/Rohan7690/rohan-portfolio",
      live_link:'https://rohan-portfolio-six.vercel.app/',
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };