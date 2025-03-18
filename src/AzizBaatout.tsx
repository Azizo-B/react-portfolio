import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { SiApachekafka, SiExpress, SiFastapi } from "react-icons/si";
import StackIcon from "tech-stack-icons";
import { Link } from "./types/link";
import { Experience } from "./types/experience";
import { Project } from "./types/project";
import { Tech } from "./types/tech";

interface AzizBaatout {
  links: Link[];
  experiences: Experience[];
  projects: Project[];
  techstack: Tech[];
}

export const AzizBaatout: AzizBaatout = {
  links: [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/aziz-baatout/",
    },
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/Azizo-B",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:aziz.baatout@gmail.com",
    },
    {
      name: "CV",
      icon: TbFileCv,
      url: "/aziz-baatout-cv.pdf",
    },
  ],
  experiences: [
    {
      logo: "/ghent-university-logo.png",
      title: "Full-stack Developer",
      company: "Ghent University",
      website: "https://www.ugent.be/",
      startDate: new Date("2025-03-01"),
      endDate: null, // Present
      description: "Developed Studium.",
      bulletPoints: [
        "Built and maintained a full-stack web application for student management.",
        "Implemented RESTful APIs for seamless data integration.",
        "Collaborated with cross-functional teams to deliver features on time.",
      ],
      location: "Ghent, Belgium",
      jobType: "Part-time",
    },
    {
      logo: "/optios-logo.png",
      title: "Data Automation Engineer",
      company: "Optios",
      website: "https://www.optios.net/",
      startDate: new Date("2025-03-01"),
      endDate: null, // Present
      description:
        "Automating data collection and lead generation for beauty salon owners.",
      bulletPoints: [
        "Developed automated workflows for data extraction and processing.",
        "Integrated third-party APIs for data enrichment.",
        "Improved data accuracy by 20% through automation.",
      ],
      location: "Lochristi, Belgium",
      jobType: "Part-time",
    },
    {
      logo: "/fintrax-logo.png",
      title: "Software Developer",
      company: "Fintrax",
      website: "https://www.fintrax.io/",
      startDate: new Date("2023-02-01"),
      endDate: new Date("2025-03-01"),
      description:
        "Enhanced web apps with AI-powered automation and efficient data handling.",
      bulletPoints: [
        "Implemented AI-powered OCR for document processing.",
        "Optimized database queries, reducing response times by 30%.",
        "Mentored junior developers and conducted code reviews.",
      ],
      location: "Ghent, Belgium",
      jobType: "Part-time",
    },
    {
      logo: "/placeholder-logo.png",
      title: "AI Developer",
      company: "EB Accountancy",
      website: null,
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-04-01"),
      description:
        "Built AI solutions for document processing and financial data extraction.",
      bulletPoints: [
        "Developed machine learning models for invoice classification.",
        "Automated financial data extraction, reducing manual effort by 50%.",
        "Built a feedback loop to continuously improve model accuracy.",
      ],
      location: "Ghent, Belgium",
      jobType: "Part-time",
    },
  ],
  projects: [
    {
      image: "/cbe-logo.png",
      title: "AI-powered Invoice Automation",
      link: "https://pypi.org/project/cbe/",
      description:
        "Built an AI-powered OCR solution to automate invoice processing, integrating with GCP's serverless architecture for seamless deployment.",
      impact:
        "Achieved 80% automation in invoice classification, saving 2 hours daily in processing time.",
      technologies: [
        "Python",
        "Google Cloud",
        "Document AI",
        "Machine Learning",
        "Docker",
      ],
    },
    {
      image: "/rijexamenmeldingen-logo.png",
      link: "https://rijexamenmeldingen.be",
      title: "Driving Exam Monitoring System",
      description:
        "A real-time notification service tracking available driving exam slots across platforms. Uses Python, FastAPI, Google Cloud, and MongoDB for data monitoring and instant notifications via email, Discord, and Telegram.",
      impact: "Cut users' driving exam wait times from months to just days.",
      technologies: ["Python", "FastAPI", "Google Cloud", "MongoDB", "Docker"],
    },
    {
      image: "/fe-gpu.png",
      title: "NVIDIA FE Bot",
      description:
        "Developed a bot to monitor NVIDIA GPU stock in real-time, enabling automated notifications on availability. This project pushed me to delve deeper into the world of programming and ignited my passion for technology.",
      impact: "Helped me and my friends secure GPUs amidst high demand.",
      technologies: ["Python", "Web Scraping"],
    },
  ],
  techstack: [
    {
      name: "Python",
      icon: <StackIcon name="python" className="w-10 h-10" />,
      color: "",
    },
    { name: "Java", icon: <StackIcon className="w-10 h-10" name="java" /> },
    { name: "JavaScript", icon: <StackIcon className="w-10 h-10" name="js" /> },
    {
      name: "TypeScript",
      icon: <StackIcon className="w-10 h-10" name="typescript" />,
    },
    {
      name: "Node.js",
      icon: <StackIcon className="w-10 h-10" name="nodejs" />,
    },
    {
      name: "Angular",
      icon: <StackIcon className="w-10 h-10" name="angular17" />,
    },
    { name: "React", icon: <StackIcon className="w-10 h-10" name="reactjs" /> },
    {
      name: "Next.js",
      icon: <StackIcon className="w-10 h-10" name="nextjs2" />,
    },
    { name: "Vue", icon: <StackIcon className="w-10 h-10" name="vuejs" /> },
    {
      name: "Nuxt.js",
      icon: <StackIcon className="w-10 h-10" name="nuxtjs" />,
    },
    {
      name: "Tailwind",
      icon: <StackIcon className="w-10 h-10" name="tailwindcss" />,
    },
    {
      name: "Express",
      icon: <SiExpress className="w-10 h-10" />,
    },
    { name: "Django", icon: <StackIcon className="w-10 h-10" name="django" /> },
    {
      name: "FastAPI",
      icon: <SiFastapi className="w-10 h-10" />,
      color: "#009486",
    },
    { name: "Flask", icon: <StackIcon className="w-10 h-10" name="flask" /> },
    {
      name: "GraphQL",
      icon: <StackIcon className="w-10 h-10" name="graphql" />,
    },
    { name: "Redis", icon: <StackIcon className="w-10 h-10" name="redis" /> },
    { name: "MySQL", icon: <StackIcon className="w-10 h-10" name="mysql" /> },
    {
      name: "PostgreSQL",
      icon: <StackIcon className="w-10 h-10" name="postgresql" />,
    },
    {
      name: "SQL Server",
      icon: <DiMsqlServer className="w-10 h-10" />,
    },
    {
      name: "MongoDB",
      icon: <StackIcon className="w-10 h-10" name="mongodb" />,
    },
    { name: "AWS", icon: <StackIcon className="w-10 h-10" name="aws" /> },
    { name: "GCloud", icon: <StackIcon className="w-10 h-10" name="gcloud" /> },
    { name: "Linux", icon: <StackIcon className="w-10 h-10" name="linux" /> },
    { name: "Docker", icon: <StackIcon className="w-10 h-10" name="docker" /> },
    { name: "Kafka", icon: <SiApachekafka className="w-10 h-10" /> },
    { name: "Git", icon: <StackIcon className="w-10 h-10" name="git" /> },
  ],
};
