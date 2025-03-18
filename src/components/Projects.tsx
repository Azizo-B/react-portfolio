import { Project } from "../types/project";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-center mb-12">
          Personal Projects
        </h1>
        <motion.div
          className="justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
