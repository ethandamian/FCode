import React from 'react';

const DiscussionDetails = ({ discussion }) => {
  if (!discussion) {
    return <div className="alert alert-info">Selecciona una discusión para ver los detalles.</div>;
  }

  return (
    <div>
      <h3>{discussion.title}</h3>
      <p><strong>Autor:</strong> {discussion.author}</p>
      <p><strong>Fecha:</strong> {discussion.date}</p>
      <div>
        {/* Aquí irían los detalles y comentarios de la discusión */}
        <p>Detalles de la discusión...</p>
      </div>
    </div>
  );
};

export default DiscussionDetails;