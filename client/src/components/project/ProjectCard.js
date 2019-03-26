import React from 'react';
const projectCard = (props) => {
  return (
    <div  className="projects-list-item">
        <h2>{props.name}</h2>
        <p>Artist: {props.artist}</p>
    </div>
  )
};

export default projectCard;