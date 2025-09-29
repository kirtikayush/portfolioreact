// src/components/pages/projects/projectsData.jsx

// import image1 from "../../../assets/image/profile.jpeg";
import image1 from "../../../assets/image/screenshots/todo_app/loginfilled.png";

const projectsData = [
  {
    id: 1,
    // image: image1,
    name: "Todo App",
    image: image1,
    skills: ["React", "CSS", "JavaScript"],
    description:
      "A personal portfolio website with dark/light mode and animations.",
    link: "https://yourportfolio.com",
  },
  {
    id: 2,
    image: "/images/project1.png",
    name: "E-Commerce App",
    skills: ["React", "Node.js", "MongoDB"],
    description:
      "A full-stack MERN app for buying and selling products online.",
    link: "https://yourportfolio.com",
  },
  {
    id: 3,
    image: "/images/project1.png",
    name: "Traffic Analyzer",
    skills: ["Python", "Streamlit", "TomTom API"],
    description:
      "Real-time traffic analysis tool with interactive map and overlays.",
    link: "https://yourportfolio.com",
  },
];

export default projectsData;
