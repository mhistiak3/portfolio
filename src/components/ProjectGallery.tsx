"use client";
import { Project } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const ProjectGallery = ({ projects }: { projects: Project[] }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // filter categories as array from projects
  const categories = Array.from(
    new Set(projects.map((project: Project) => project.category))
  );

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleFilterClick = (category: string) => {
    if (category === activeFilter) return;

    setIsAnimating(true);

    // Wait for fade out animation
    setTimeout(() => {
      setActiveFilter(category);
      setIsAnimating(false);
    }, 300);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="h-full">
      {/*  Tabs*/}
      <ul className="grid gap-x-2 mb-6 grid-cols-4 text-center text-sm">
        <li
          className={` py-2 border-b cursor-pointer transition-colors ${
            activeFilter === "all"
              ? "border-primary text-primary"
              : "border-primary/40 text-text hover:text-primary"
          }`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`py-2 border-b cursor-pointer transition-colors ${
              activeFilter === category
                ? "border-primary text-primary"
                : "border-primary/40 text-text hover:text-primary"
            }`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-2">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.category}-${index}`}
            className={`col-span-3 sm:col-span-1 overflow-hidden rounded transition-all duration-300 cursor-pointer ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            } hover:scale-105`}
            onClick={() => openModal(project)}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={closeModal}
        >
          <div
            className="bg-container rounded-lg max-w-lg w-full overflow-hidden  animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Project Image */}
            <div className="relative w-full h-50 md:h-70">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl z-10 bg-dark/50 rounded-full p-2 hover:bg-dark/70 transition"
              >
                <FaTimes />
              </button>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="mb-6">{selectedProject.description} </p>
              <p className="text-sm text-primary mb-4">
                {selectedProject.category}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded transition"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-heading/10 text-heading hover:bg-heading/20 rounded transition"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
