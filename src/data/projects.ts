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
    image: "images/monster-game.jfif",
    url: "https://github.com/Prof-Redzo/monster-game",
    slug: "monster-game",
    tech: ["JavaScript", "HTML", "CSS"],
  },

  {
    title: "Weather App",
    description: "Weather app built with React + Vite",
    image: "images/weather.png",
    url: "https://github.com/Prof-Redzo/weather-app-react",
    slug: "weather-app",
    tech: ["React + Vite"],
  },
];
