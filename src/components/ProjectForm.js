import React, { useState } from 'react';

function ProjectForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name);
    setName('');
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom du projet"
      />
      <button type="submit">Ajouter un projet</button>
    </form>
  );
}

export default ProjectForm;
