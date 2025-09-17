export interface Project {
  title: string;
  description: string;
  image?: string;
  url: string;
  slug: string;
  tech?: string[];
  details?: string; 
}

export const projects: Project[] = [
  {
    title: "Doctor Finder",
    description: "A Node.js + MongoDB backend app for finding doctors.",
    image: "/my-portfolio/projects/doctor-finder.avif",
    url: "https://github.com/Prof-Redzo/doctor-finder",
    slug: "doctor-finder",
    tech: ["Node.js", "Express", "MongoDB"],
    details:
      "Doctor Finder is a backend application built with Node.js, Express, and MongoDB. It allows admins to add doctors, and doctors can log in, manage their services, and authenticate using JWT. Data migrations were handled with MongoDB migrate. It demonstrates secure authentication and role-based access control.",
  },
  {
    title: "Monster Game",
    description: "A fun JavaScript game built while learning core JS concepts.",
    image: "/my-portfolio/projects/monster-game.jfif",
    url: "https://github.com/Prof-Redzo/monster-game",
    slug: "monster-game",
    tech: ["JavaScript", "HTML", "CSS"],
    details:
      "A simple turn-based game where the player battles a monster. This project helped me understand DOM manipulation, event handling, and game state logic in JavaScript.",
  },
  {
    title: "Weather App",
    description: "Weather app built with React + Vite",
    image: "/my-portfolio/projects/weather.png",
    url: "https://github.com/Prof-Redzo/weather-app-react",
    slug: "weather-app",
    tech: ["React", "Vite"],
    details:
      "A React app that fetches live weather data from an API. It demonstrates API integration, component-based design, and managing state with React hooks.",
  },
  {
    title: "Recipes App",
    description:
      "A React application for browsing and managing recipes. Uses Redux for state management.",
    image: "/my-portfolio/projects/recipe-app.jpg",
    url: "https://github.com/Prof-Redzo/recipes-app",
    slug: "recipes-app",
    tech: ["React", "Redux", "JavaScript", "Material UI"],
    details:
      "Recipes App demonstrates handling complex UI with global state management using Redux. Users can browse, add, and manage recipes. Styling is done with CSS, and the app is structured into reusable React components.",
  },
  {
    title: "Smetovi",
    description:
      "I was a contributor on smetovi.ba, an open-source website for the mountain Smetovi near Zenica.",
    image: "/my-portfolio/projects/smetovi.png",
    url: "https://github.com/zeforgezenica/smetovi",
    slug: "smetovi",
    tech: ["Astro"],
    details:
      "This project showcases collaboration on an open-source Astro website. My contributions included adding pages, improving layout, and helping with UI/UX enhancements.",
  },
  {
    title: "Busez",
    description:
      "I was a contributor on the open-source Busez project, an app for tracking bus transit data in Zenica.",
    image: "/my-portfolio/projects/Busez.png",
    url: "https://github.com/zeforgezenica/busez",
    slug: "busez",
    tech: ["Next.js"],
    details:
      "Busez is a community-driven project built with Next.js. It provides real-time bus tracking data for Zenica. My work included contributing to the frontend and integrating API calls.",
  },
  {
    title: "Library-Backend",
    description: "A Node.js + MongoDB backend app for library management.",
    image: "/my-portfolio/projects/library.jfif",
    url: "https://github.com/Prof-Redzo/library---backend",
    slug: "library",
    tech: ["Node.js", "Express", "MongoDB"],
    details:
      "Library backend allows managing books and users with CRUD operations. It uses Node.js, Express, and MongoDB. It was one of my first backend projects demonstrating REST API design and database integration.",
  },
];
