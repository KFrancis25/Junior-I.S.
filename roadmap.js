import React, { useState } from 'react';
import './App.css';

const Roadmap = () => {
  const [selected, setSelected] = useState(null);

  const categories = [
    { id: 1, name: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular'] },
    { id: 2, name: 'Backend', skills: ['Node.js', 'Python', 'PHP', 'Ruby', 'Java', 'Go'] },
    { id: 3, name: 'Databases', skills: ['SQL', 'NoSQL', 'MySQL', 'PostgreSQL', 'MongoDB'] },
    { id: 4, name: 'DevOps', skills: ['Git', 'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Azure'] },
    { id: 5, name: 'Soft Skills', skills: ['Communication', 'Problem Solving', 'Time Management', 'Teamwork'] },
  ];

  const handleSelect = (categoryId) => {
    setSelected(categoryId);
  };

  const handleDeselect = () => {
    setSelected(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Science Roadmap</h1>
      </header>
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category ${selected === category.id ? 'selected' : ''}`}
            onClick={() => handleSelect(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
      {selected && (
        <div className="skills">
          <h2>{categories.find((category) => category.id === selected).name}</h2>
          <ul>
            {categories.find((category) => category.id === selected).skills.map((skill) => (<li key={skill}>{skill}</li>
            ))}
          </ul>
          <button onClick={handleDeselect}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Roadmap;