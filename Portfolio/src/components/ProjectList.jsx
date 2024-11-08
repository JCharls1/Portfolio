// src/components/ProjectList.js
import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="p-6 bg-shgreen text-white rounded-lg shadow-lg max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-cream rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold text-customGray">{project.title}</h3>
            <p className="mt-2 text-gray-300 text-customGray">{project.description}</p>
            <div className="mt-4 space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-customGray text-white px-4 py-2 rounded-lg hover:bg-shgreen hover:underline transition duration-200"
                >
                  GitHub Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-darkGreen text-white px-4 py-2 rounded-lg hover:bg-shgreen hover:underline transition duration-200"
                >
                  Live Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
