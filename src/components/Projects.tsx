import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
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
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <motion.div
          className="justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
