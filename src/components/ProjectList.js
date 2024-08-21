import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import ProjectForm from './ProjectForm';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (name) => {
    if (!projects.find((p) => p.name === name)) {
      setProjects([...projects, { name }]);
    } else {
      alert('Ce projet existe déjà.');
    }
  };

  const handleDeleteProject = (name) => {
    setProjects(projects.filter((p) => p.name !== name));
  };

  const handleEditProject = (oldName, newName) => {
    if (newName.trim() && !projects.find((p) => p.name === newName)) {
      setProjects(
        projects.map((p) => (p.name === oldName ? { name: newName } : p))
      );
    } else {
      alert('Le nom du projet est soit vide soit déjà pris.');
    }
  };

  return (
    <div className="project-list">
      <ProjectForm onAdd={handleAddProject} />
      {projects.map((project) => (
        <ProjectItem
          key={project.name}
          project={project}
          onDelete={handleDeleteProject}
          onEdit={handleEditProject}
        />
      ))}
    </div>
  );
}

export default ProjectList;
