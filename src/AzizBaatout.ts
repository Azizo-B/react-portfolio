import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";

export const AzizBaatout = {
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
};
