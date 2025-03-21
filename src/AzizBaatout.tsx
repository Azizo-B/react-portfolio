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
import data from "./AzizBaatout.json";

interface AzizBaatout {
  name: string;
  title: string;
  location: string;
  links: Link[];
  experiences: Experience[];
  projects: Project[];
  techstack: Tech[];
}

const getLinkIcons = (linkName: string) => {
  switch (linkName) {
    case "LinkedIn":
      return FaLinkedinIn;
    case "GitHub":
      return FiGithub;
    case "Email":
      return FaEnvelope;
    case "CV":
      return TbFileCv;
    default:
      throw new Error("No icon for:" + linkName);
  }
};

const getjobSummary = (company: string, title: string) => {
  switch (company + ", " + title) {
    case "Ghent University, Full-stack Developer":
      return (
        <div>
          As part of the
          <a
            href="https://gentsestudentenraad.be/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all duration-300"
          >
            Ghent Student Council
          </a>
          , I developed and maintained
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
          codebase to ensure smooth handovers for future developers.
        </div>
      );
    case "Optios, Data Automation Engineer":
      return (
        <div>
          At Optios, I worked on automating the process of gathering and
          organizing data about beauty salon owners to help the sales team focus
          on the most promising leads. I integrated with the CBE (Crossroads
          Bank for Enterprises) to pull basic info about the salons and their
          owners. I also set up other automations and tools to enrich the data,
          making it faster and easier to figure out which leads were worth
          pursuing. My work helped cut down on manual tasks by about 20% and
          made the whole lead qualification process smoother and more efficient.
        </div>
      );
    case "Fintrax, Software Developer":
      return (
        <div>
          At Fintrax, I started as a backend developer, working on features like
          PDF parsing and filling to automate text extraction and document
          processing. I also integrated with Silverfin for a few features to
          support post-accounting and tax automation. As a quick learner, I was
          soon tasked with frontend development as well, contributing to both
          backend and frontend features for their Django and Angular web
          application. My ability to adapt and take on new challenges showed
          them I could handle anything they had in store.
        </div>
      );
    case "EB Accountancy, Software Engineer":
      return (
        <div>
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
        </div>
      );
    default:
      throw new Error("No summary found for:" + company + ", " + title);
  }
};

const getTechIcons = (techName: string) => {
  switch (techName) {
    case "Python":
      return <StackIcon name="python" className="w-10 h-10" />;
    case "Java":
      return <StackIcon name="java" className="w-10 h-10" />;
    case "JavaScript":
      return <StackIcon name="js" className="w-10 h-10" />;
    case "TypeScript":
      return <StackIcon name="typescript" className="w-10 h-10" />;
    case "Node.js":
      return <StackIcon name="nodejs" className="w-10 h-10" />;
    case "Angular":
      return <StackIcon name="angular17" className="w-10 h-10" />;
    case "React":
      return <StackIcon name="reactjs" className="w-10 h-10" />;
    case "Next.js":
      return <StackIcon name="nextjs2" className="w-10 h-10" />;
    case "Vue":
      return <StackIcon name="vuejs" className="w-10 h-10" />;
    case "Nuxt.js":
      return <StackIcon name="nuxtjs" className="w-10 h-10" />;
    case "Tailwind":
      return <StackIcon name="tailwindcss" className="w-10 h-10" />;
    case "Express":
      return <SiExpress className="w-10 h-10" />;
    case "Django":
      return <StackIcon name="django" className="w-10 h-10" />;
    case "FastAPI":
      return <SiFastapi className="w-10 h-10" color="#009486" />;
    case "Flask":
      return <StackIcon name="flask" className="w-10 h-10" />;
    case "GraphQL":
      return <StackIcon name="graphql" className="w-10 h-10" />;
    case "Redis":
      return <StackIcon name="redis" className="w-10 h-10" />;
    case "MySQL":
      return <StackIcon name="mysql" className="w-10 h-10" />;
    case "PostgreSQL":
      return <StackIcon name="postgresql" className="w-10 h-10" />;
    case "SQL Server":
      return <DiMsqlServer className="w-10 h-10" />;
    case "MongoDB":
      return <StackIcon name="mongodb" className="w-10 h-10" />;
    case "AWS":
      return <StackIcon name="aws" className="w-10 h-10" />;
    case "GCloud":
      return <StackIcon name="gcloud" className="w-10 h-10" />;
    case "Linux":
      return <StackIcon name="linux" className="w-10 h-10" />;
    case "Docker":
      return <StackIcon name="docker" className="w-10 h-10" />;
    case "Kafka":
      return <SiApachekafka className="w-10 h-10" />;
    case "Git":
      return <StackIcon name="git" className="w-10 h-10" />;
    default:
      throw new Error("No icon for" + techName);
  }
};

export const AzizBaatout: AzizBaatout = {
  ...data,
  links: data.links.map((link) => ({
    ...link,
    icon: getLinkIcons(link.name) || "",
  })),
  experiences: data.experiences.map((exp) => ({
    ...exp,
    startDate: new Date(exp.startDate),
    endDate: exp.endDate ? new Date(exp.endDate) : null,
    summary: getjobSummary(exp.company, exp.title),
  })),
  techstack: data.techstack.map((tech) => ({
    name: tech.name,
    icon: getTechIcons(tech.name),
  })),
};
