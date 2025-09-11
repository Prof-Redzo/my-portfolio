export interface Project {
  title: string;
  description: string;
  image?: string;
  url: string;
  slug: string;
  tech?: string[];
}

export const projects: Project[] = [
  {
    title: "Doctor Finder",
    description: "A Node.js + MongoDB backend app for finding doctors.",
    image: "/images/doctor-finder.avif",
    url: "https://github.com/Prof-Redzo/doctor-finder",
    slug: "doctor-finder",
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Monster Game",
    description: "A fun JavaScript game built while learning core JS concepts.",
    image: "/images/monster-game.jfif",
    url: "https://github.com/Prof-Redzo/monster-game",
    slug: "monster-game",
    tech: ["JavaScript", "HTML", "CSS"],
  },

  {
    title: "Weather App",
    description: "Weather app built with React + Vite",
    image: "/images/weather.png",
    url: "https://github.com/Prof-Redzo/weather-app-react",
    slug: "weather-app",
    tech: ["React + Vite"],
  },

  {
    title: "Recipes App",
    description: "A React application for browsing and managing recipes. Uses Redux for state management and demonstrates handling complex UI with global state.",
    image: "/images/recipe-app.jpg",
    url: "https://github.com/Prof-Redzo/recipes-app",
    slug: "recipes-app",
    tech: ["React", "Redux", "JavaScript", "CSS"],
  },

  {
    title: "Smetovi",
    description: "I was contributer on smetovi.ba project, an open-source website for the mountain Smetovi near Zenica, Bosnia and Herzegovina.",
    image: "/images/smetovi.png",
    url: "https://github.com/zeforgezenica/smetovi",
    slug: "Smetovi.ba",
    tech: ["Astro"],
  },

  {
    title: "Busez",
    description: "I was contributer on open-source Busez project, App for tracking bus transit data in Zenica.",
    image: "/images/Busez.png",
    url: "https://github.com/zeforgezenica/busez",
    slug: "kadjebus.zeforge.ba",
    tech: ["Next.js"],
  },

  {
    title: "Library",
    description: "A Node.js + MongoDB backend app for library.",
    image: "/images/library.jfif",
    url: "https://github.com/Prof-Redzo/library---backend",
    slug: "library---backend",
    tech: ["Node.js", "Express", "MongoDB"],
  },
];
