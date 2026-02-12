import { motion } from "motion/react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Projects() {
  const gameProjects = [
    {
      id: 1,
      title: "3D Puzzle Platformer",
      description: "A physics-based puzzle game featuring innovative mechanics and 20+ levels. Built with Unity and C#, featuring custom shader work and procedural level generation.",
      image: "https://images.unsplash.com/photo-1660496379804-b408bfacc9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGdhbWluZyUyMHNldHVwfGVufDF8fHx8MTc3MDgwMTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unity", "C#", "3D", "Physics"],
      date: "Fall 2025",
      color: "orange-500",
      category: "game"
    },
    {
      id: 2,
      title: "2D Roguelike RPG",
      description: "Procedurally generated dungeon crawler with turn-based combat. Features include inventory system, skill trees, and persistent progression.",
      image: "https://images.unsplash.com/photo-1660507224958-729c18ba1277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBwaXhlbCUyMGFydHxlbnwxfHx8fDE3NzA4Mzk2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Godot", "GDScript", "Procedural", "2D"],
      date: "Spring 2025",
      color: "orange-500",
      category: "game"
    },
  ];

  const softwareProjects = [
    {
      id: 3,
      title: "Task Management Web App",
      description: "Full-stack productivity application with real-time collaboration, user authentication, and REST API. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MDgyNTU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "MongoDB", "REST API"],
      date: "Winter 2025",
      color: "blue-600",
      category: "software"
    },
    {
      id: 4,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts and nutrition. Includes data visualization, goal setting, and progress analytics.",
      image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzA4Mjk3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "TypeScript", "Firebase"],
      date: "Fall 2024",
      color: "blue-600",
      category: "software"
    },
    {
      id: 5,
      title: "Algorithm Visualizer",
      description: "Interactive web tool for visualizing sorting and pathfinding algorithms. Educational tool with adjustable speed and custom data inputs.",
      image: "https://images.unsplash.com/photo-1672385245363-f4e7ed05a63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwbGFwdG9wJTIwY29kZXxlbnwxfHx8fDE3NzA4Njk4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["JavaScript", "Canvas API", "Algorithms"],
      date: "Summer 2024",
      color: "green-500",
      category: "software"
    },
  ];

  const allProjects = [...gameProjects, ...softwareProjects];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in game development and software engineering
          </p>
        </motion.div>

        {/* Game Development Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
            Game Development
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {gameProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    
                    {/* Overlay buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 bg-${project.color}/10 border border-${project.color}/20 rounded-lg text-${project.color} text-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Software Development Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
            Software Development
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    
                    {/* Overlay buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 bg-${project.color}/10 border border-${project.color}/20 rounded text-${project.color} text-xs`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 p-8 bg-slate-900 border border-slate-700 rounded-xl"
        >
          <Github className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">View More on GitHub</h3>
          <p className="text-gray-400 mb-6">
            Check out my GitHub profile for additional projects, contributions, and open-source work
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white font-semibold hover:bg-slate-700 transition-colors inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            Visit GitHub Profile
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}