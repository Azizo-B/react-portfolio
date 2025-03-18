import React from "react";
import { DiMsqlServer } from "react-icons/di";
import { SiApachekafka, SiExpress, SiFastapi } from "react-icons/si";
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

const TechStack: React.FC = () => {
  const techStack = [
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
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="flex flex-col justify-center items-center container max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Tech Stack</h1>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the first item is in view
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="h-[128px] w-[128px] p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div
                className="mb-2 text-4xl"
                style={{ color: tech.color || "inherit" }} // Apply color only if it exists
              >
                {tech.icon}
              </div>
              <span className="text-lg font-medium text-gray-700">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default TechStack;
