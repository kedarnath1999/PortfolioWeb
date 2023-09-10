import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    nec,
    cognizant,
    sentimentAnalyzer,
    portfolioWeb,
    musicApp,
    webAr,
    ecom
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "SDET (intern)",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#FFFFFF",
      date: "Mar 2021 - Aug 2021",
      points: [
        "Worked as SDET (Software Engineerin Test) and performed automation testing using Selenium Web Driver",
        "Technologies used: java, Selenium, Jenkins, Eclipse"
      ],
    },
    {
      title: "Web and mobile app developer",
      company_name: "NEC India",
      icon: nec,
      iconBg: "#FFFFFF",
      date: "Aug 2021 - July 2023",
      points: [
        "I developed Front-End Web for a Blockchain project, a Blockchain-based traceability interface for Indian spices that aimed at enhancing transparency in the trade of spices. ",
        "I worked on a mobile app development which was a Blockchain-based project where institutions could generate authentic certificates for their stakeholders",
        "●	I have worked on creating an educational tech platform where students can learn coding by taking coding tests and assessments about a specific subject.",
        "Technologies used: React JS, React-Native, MUI (Material-UI), CSS (Cascading Style Sheets), AWS Cognito, JavaScript, DynamoDB",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Sentiment analyzer chrome extension",
      description:
        "The chrome extension that is capable of analyzing any text and classifying it into 5 different categories based on its sentiment. ",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: sentimentAnalyzer,
      source_code_link: "https://github.com/kedarnath1999/sentiment-analyzer-",
    },
    {
      name: "Portfolio web app",
      description:
        "Porfolio Web application with 3D models",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioWeb,
      source_code_link: "https://github.com/kedarnath1999/PortfolioWeb",
    },
    {
      name: "Music player app",
      description:
        "A web application where users can listen to music",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Exress",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        }
      ],
      image: musicApp,
      source_code_link: "https://github.com/kedarnath1999/music-app2",
    },
    {
      name: "AR visiting card",
      description:
        "A web application to create Augmented Reality ID card, where users can scan a QR and will be able to view information about another person in AR space.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "azure",
          color: "green-text-gradient",
        },
        {
          name: "AR.js",
          color: "pink-text-gradient",
        },
        {
          name: "webAr",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: webAr,
      source_code_link: "#",
    },
    {
      name: "Ecommerce web app",
      description:
        "A web application where users can add or delete items from the cart and complete online purchases.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/kedarnath1999/Ecom-Django-web-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };