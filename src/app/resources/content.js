import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Güney",
  lastName: "Kılıçel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Türkçe"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  
  // Import new icons in /once-ui/icons.ts
  
  
  
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/guneykilicel",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/g%C3%BCney-k%C4%B1l%C4%B1%C3%A7el-5920b61ba/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:kilicelguney@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>full stack engineer and builder Güney Kılıçel</>,
  subline: (
    <>
      I'm Güney, a full stack engineer at <InlineCode>WORLD</InlineCode>, where I craft intuitive user experiences that bridge innovative design with robust functionality.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet Güney Kılıçel, a Full Stack Developer and Candidate Engineer based in Turkey, passionate about modern web technologies and innovative software solutions.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/guneykilicel",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I graduated from Gazi University in the field of Computer Engineering with a GPA of 3.20. During my academic journey, I focused on modern web technologies, particularly React and Next.js. I gained expertise in both front-end and full-stack development through a combination of theoretical knowledge and hands-on project experience. As a software developer who closely follows technological advancements, I am solution-oriented and continuously strive for self-improvement by delivering innovative and effective solutions to real-world challenges.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience & Projects",
    experiences: [
      {
        company: "Monomex",
        timeframe: "N/A",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed a unified ecosystem integrating a promotional website with a comprehensive CMS, CRM, and machine tracking functionalities.
          </>,
          <>
            Leveraged modern frameworks like Next.js, React, and Contentful to deliver scalable and robust solutions.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-06.webp",
            alt: "Monomex Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "İnnova Bilişim / Cloudworks Digital",
        timeframe: "N/A",
        role: "Candidate Engineer - Front-End Developer",
        achievements: [
          <>
            Enhanced dynamic form error handling, design consistency, and RxJS optimizations in high-profile projects.
          </>,
          <>
            Managed user interface improvements and customer data integration to boost overall user experience.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cloudworks-01.webp",
            alt: "Cloudworks Digital Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "TÜBİTAK 2209-A",
        timeframe: "N/A",
        role: "Project Developer",
        achievements: [
          <>
            Designed and implemented the Livestock Health and Herd Management System to support sustainable livestock practices.
          </>,
          <>
            Developed data analytics capabilities and laid the foundation for AI integration to enhance animal health monitoring and herd management.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/shuihssys-01.webp",
            alt: "Livestock Health & Herd Management System",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Portakal",
        timeframe: "N/A",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built a full-stack food delivery application using React, PostgreSQL, JSON Web Tokens, and RESTful APIs.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/portakal-01.webp",
            alt: "Portakal Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CoffeeAppUI",
        timeframe: "N/A",
        role: "React Native Developer",
        achievements: [
          <>
            Developed a modern coffee ordering interface with React Native and Expo, transforming a Figma design into a fully functional mobile app.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/coffeeappui-01.webp",
            alt: "CoffeeAppUI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Prescripto",
        timeframe: "N/A",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed a comprehensive online platform for dental clinics, enabling patients to select doctors and book appointments seamlessly.
          </>,
          <>
            Implemented an intuitive scheduling system with responsive UI design using Next.js, React, and Tailwind CSS.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/prescripto-01.webp",
            alt: "Prescripto Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Netflix Angular TMDB API",
        timeframe: "N/A",
        role: "Front-End Developer",
        achievements: [
          <>
            Developed a dynamic web application that emulates the Netflix browsing experience using Angular.
          </>,
          <>
            Integrated with The Movie Database (TMDB) API to fetch and display comprehensive movie data, including trending films and detailed title information.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/netflix-01.webp",
            alt: "Netflix Angular TMDB API Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Gazi University - Computer Engineering",
        description: (
          <>
            Completed a degree in Computer Engineering with a GPA of 3.20, focusing on software development and modern web technologies.
          </>
        ),
      },
      {
        name: "Ali Osman Sönmez Vocational and Technical School",
        description: (
          <>
            Specialized in web development and software engineering, laying the groundwork for advanced front-end and full-stack development.
          </>
        ),
      },
    ],
  },
  trainings: {
    display: true,
    title: "Trainings & Certifications",
    courses: [
      {
        name: "Next.js & Vite (Advanced)",
        description: (
          <>Advanced training received from Gazi University, YouTube, and BTK Akademi to master Next.js and Vite.</>
        ),
      },
      {
        name: "Angular with TypeScript",
        description: (
          <>Enhanced front-end development skills via Udemy and YouTube courses focused on Angular.</>
        ),
      },
      {
        name: "React JS & Redux with RESTful API (Advanced Certifications)",
        description: (
          <>Acquired advanced front-end development techniques via Udemy and YouTube.</>
        ),
      },
      {
        name: "TailwindCSS, Bootstrap 5, SASS, SCSS, shadcn/ui, MUI",
        description: (
          <>Mastered modern styling frameworks and UI libraries through Udemy, YouTube, and İnnova Blşm training sessions.</>
        ),
      },
      {
        name: "Database Management Systems & Advanced SQL",
        description: (
          <>Completed comprehensive courses on database management via Udemy and YouTube.</>
        ),
      },
      {
        name: "Full Stack Web Development",
        description: (
          <>Completed courses via Udemy, High School programs, Gazi University, and YouTube.</>
        ),
      },
      {
        name: "Modern and 3D Front-end Design Camps",
        description: (
          <>Attended design camps on Udemy focused on modern and 3D front-end design.</>
        ),
      },
      {
        name: "Web Penetration Testing",
        description: (
          <>Gained insights into cybersecurity and testing methodologies at Gazi University and High School programs.</>
        ),
      },
      {
        name: "Front End Web Development",
        description: (
          <>Gained expertise through Udemy, High School programs, Gazi University, and YouTube resources.</>
        ),
      },
      {
        name: "HTML5, CSS3, JavaScript, TypeScript",
        description: (
          <>Learned modern web standards and programming languages through Udemy, University courses, and YouTube tutorials.</>
        ),
      },
      {
        name: "Git Version Control System",
        description: (
          <>Learned essential version control skills from Udemy, High School programs, Gazi University, and YouTube.</>
        ),
      },
      {
        name: "Java & C# Bootcamp",
        description: (
          <>Participated in bootcamps offered on Udemy and YouTube to strengthen object-oriented programming skills.</>
        ),
      },
      {
        name: "React Native Development (Expo & Native)",
        description: (
          <>Enhanced mobile development skills with courses from Udemy and YouTube.</>
        ),
      },
      {
        name: "Network and Web Protocols/Standards",
        description: (
          <>Studied through Sber Vatan, Gazi University, and BTK Akademi to understand networking and web standards.</>
        ),
      },
      {
        name: "C, C++, Python",
        description: (
          <>Expanded programming proficiency with language-specific courses available on YouTube.</>
        ),
      },
    ],
  },
  
  
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Next.js & React",
        description: (
          <>
            Specialized in building robust, scalable, and SEO-friendly web applications using Next.js. Deep expertise in React hooks, server-side rendering, static site generation, and API integrations, ensuring high performance and maintainability.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/shuihssys-01.webp",
            alt: "Next.js & React",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "TypeScript & JavaScript",
        description: (
          <>
            Proficient in modern JavaScript and TypeScript, with a strong focus on writing type-safe and scalable code for complex web applications.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cloudworks-01.webp", // You may update this image if a more specific one is available
            alt: "TypeScript & JavaScript",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React Native",
        description: (
          <>
            Experienced in building cross-platform mobile applications with React Native and Expo, delivering seamless and engaging user experiences.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/coffeeappui-01.webp",
            alt: "React Native",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full Stack Development",
        description: (
          <>
            Competent in both front-end and back-end development using Node.js, PostgreSQL, MongoDB, and RESTful APIs. Focused on creating secure and efficient applications with modern web security practices.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/portakal-01.webp",
            alt: "Full Stack Development",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  
};



const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
