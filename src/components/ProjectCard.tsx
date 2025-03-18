import TiltedCard from "./TiltedCard";
import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { Project } from "../types/project";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <TiltedCard
      rotateAmplitude={7}
      className="max-w-[500px] bg-white border border-gray"
    >
      <div className="p-6">
        <div className=" h-48 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200">
          <img
            src={project.image}
            alt={`logo`}
            className="w-full max-h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        {/* Live Project Link */}
        {project.link && (
          <a
            href={project.link}
            className="project-link inline-flex items-center text-gray-400 hover:underline mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              className="w-2 h-2 bg-red-500 rounded-full mr-2"
              animate={{
                scale: [1, 1.2, 1], // Scale up and down
                opacity: [1, 0.8, 1], // Fade in and out
              }}
              transition={{
                duration: 1.5, // Duration of one pulse
                repeat: Infinity, // Repeat indefinitely
                ease: "easeInOut", // Smooth easing
              }}
            />{" "}
            Live Project
            <HiExternalLink className="ml-1 text-sm text-gray-400" />
          </a>
        )}
        <p className="mb-4">{project.description}</p>
        <p className="project-impact text-sm italic mb-4">{project.impact}</p>

        {/* Technologies Used */}
        <div className="project-tech flex flex-wrap  gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#3a3a3a] text-sm text-white px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </TiltedCard>
  );
};

export default ProjectCard;
