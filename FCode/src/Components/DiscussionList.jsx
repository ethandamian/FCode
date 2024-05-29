import React from 'react';

const discussions = [
  { id: 1, title: "¿Cómo implementar un diseño en React?", author: "Juan Pérez", date: "2024-05-28" },
  { id: 2, title: "Mejorando el rendimiento de una aplicación web", author: "Ana García", date: "2024-05-27" },
  // Agrega más discusiones aquí
];

const DiscussionList = ({ onDiscussionSelect }) => {
  return (
    <div className="list-group">
      {discussions.map(discussion => (
        <button
          key={discussion.id}
          className="list-group-item list-group-item-action"
          onClick={() => onDiscussionSelect(discussion)}
        >
          <h5>{discussion.title}</h5>
          <p>
            Por {discussion.author} el {discussion.date}
          </p>
        </button>
      ))}
    </div>
  );
};

export default DiscussionList;