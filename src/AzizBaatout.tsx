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
  name: string;
  title: string;
  links: Link[];
  experiences: Experience[];
  projects: Project[];
  techstack: Tech[];
}

export const AzizBaatout: AzizBaatout = {
  name: "Aziz Baatout",
  title: "Student Software Developer",
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
      description:
        "Top academic institution in Belgium, known for quality education and research.",
      bulletPoints: [
        "Developed and maintained a Django/Nuxt.js web application for document management.",
        "Wrote thorough documentation to ensure smooth project handover.",
      ],
      location: "Ghent, Belgium",
      jobType: "Part-time",
      summary: (
        <p>
          As part of the{" "}
          <a
            href="https://gentsestudentenraad.be/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all duration-300"
          >
            Ghent Student Council
          </a>
          , I developed and maintained{" "}
          <a
            href="http://studium.gent/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all duration-300"
          >
            Studium
          </a>
          , a platform for students to share notes, summaries, and other
          academic documents. These documents are protected by Ghent
          University's copyright policies. I was the sole developer, handling
          both the backend and frontend with technologies like Django, GraphQL,
          Vue.js, and Nuxt.js. I was also responsible for documenting the
          codebase to ensure smooth handovers for future developers.",
        </p>
      ),
    },
    {
      logo: "/optios-logo.png",
      title: "Data Automation Engineer",
      company: "Optios",
      website: "https://www.optios.net/",
      startDate: new Date("2025-03-01"),
      endDate: null, // Present
      description:
        "Optios offers booking, POS, salon management, and marketing software for beauty salons.",
      bulletPoints: [
        "Developed automated workflows for data extraction, reducing manual effort by 20%.",
        "Integrated third-party APIs for data enrichment.",
        "Improved data accuracy through automation.",
      ],
      location: "Lochristi, Belgium",
      jobType: "Part-time",
      summary: (
        <p>
          At Optios, I worked on automating the process of gathering and
          organizing data about beauty salon owners to help the sales team focus
          on the most promising leads. I integrated with the CBE (Crossroads
          Bank for Enterprises) to pull basic info about the salons and their
          owners. I also set up other automations and tools to enrich the data,
          making it faster and easier to figure out which leads were worth
          pursuing. My work helped cut down on manual tasks by about 20% and
          made the whole lead qualification process smoother and more efficient.
        </p>
      ),
    },
    {
      logo: "/fintrax-logo.png",
      title: "Software Developer",
      company: "Fintrax",
      website: "https://www.fintrax.io/",
      startDate: new Date("2023-02-01"),
      endDate: new Date("2025-03-01"),
      description:
        "Fintech scale-up partnering with Silverfin to automate post-accounting and tax processes.",
      bulletPoints: [
        "Developed features for a Django/Angular web application.",
        "Implemented PDF parsing solutions for efficient text extraction.",
        "Worked with APIs such as Exact Online, Silverfin, MyMinfin.",
      ],
      location: "Ghent, Belgium",
      jobType: "Part-time",
      summary: (
        <p>
          At Fintrax, I started as a backend developer, working on features like
          PDF parsing and filling to automate text extraction and document
          processing. I also integrated with Silverfin for a few features to
          support post-accounting and tax automation. As a quick learner, I was
          soon tasked with frontend development as well, contributing to both
          backend and frontend features for their Django and Angular web
          application. My ability to adapt and take on new challenges showed
          them I could handle anything they had in store.
        </p>
      ),
    },
    {
      logo: "/placeholder-logo.png",
      title: "AI Developer",
      company: "EB Accountancy",
      website: null,
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-04-01"),
      description: "Independent accountant focused on automating accountancy.",
      bulletPoints: [
        "Implemented AI-powered OCR and classification for invoice processing",
        "Deployed on Google Cloud with a focus on scale and minimizing operational costs.",
        "Developed a MLOps pipeline, creating a positive feedback loop that continuously improves system performance with every invoice processed.",
      ],
      location: "Ghent, Belgium",
      jobType: "Part-time",
      summary: (
        <p>
          At EB Accountancy, I developed InFlow, an AI-powered application for
          invoice processing and automation. I used Google's AI OCR technology
          to scan and extract data from invoices uploaded via the application's
          UI. The extracted data was then checked, normalized, and stored in a
          relational database. I also built a frontend annotation tool that
          allowed users to provide feedback directly on the AI's extracted
          bounding boxes, which was used to further train the AI and improve its
          accuracy. Additionally, I implemented a system to classify processed
          invoices into the correct account numbers. The application was
          deployed on Google Cloud, ensuring scalability and cost efficiency,
          while the MLOps pipeline I developed created a continuous feedback
          loop to improve system performance over time.
        </p>
      ),
    },
  ],
  projects: [
    {
      image: "/cbe-logo.png",
      title: "The CBE Python Package",
      link: "https://pypi.org/project/cbe/",
      description:
        "The CBE Python Package provides an interface to interact with the CBE, enabling users to authenticate, download data extracts, and query enterprise details. Built with Python and SQLite, it simplifies access to enterprise data by mimicking the structure of the CBE Public Search website.",
      impact:
        "Saves developers time by eliminating the need to reinvent the wheel.",
      technologies: ["Python", "SQLite", "Github Actions", "Sphinx", "PyPi"],
    },
    {
      image: "/rijexamenmeldingen-logo.png",
      link: "https://rijexamenmeldingen.be",
      title: "Driving Exam Monitoring System",
      description:
        "A real-time notification service that tracks available driving exam slots across platforms. Built with Python, FastAPI, Google Cloud, and MongoDB, it monitors data changes and sends instant notifications via email, Discord, and Telegram.",
      impact: "Cut users' driving exam wait times from months to just days.",
      technologies: [
        "Python",
        "FastAPI",
        "Google Cloud",
        "MongoDB",
        "Docker",
        "Stripe",
      ],
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
