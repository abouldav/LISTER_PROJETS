import React, { useState } from 'react';

function ProjectItem({ project, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(project.name);

  const handleEdit = () => {
    onEdit(project.name, newName);
    setIsEditing(false);
  };

  return (
    <div className="project-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span>{project.name}</span>
          <div className="project-actions">
            <button onClick={() => setIsEditing(true)}>Modifier</button>
            <button onClick={() => onDelete(project.name)}>Supprimer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectItem;
