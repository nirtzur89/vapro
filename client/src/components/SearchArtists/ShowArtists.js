import React from "react";
import { Link } from "react-router-dom";

const ShowArtists = props => {
  console.log("props.data", props.data);
  return (
    <div>
      <div>
        <h1>Artists</h1>
        {props.data.map(oneArtist => {
          return (
            <div key={oneArtist._id}>
              <Link to={`/artists/${oneArtist._id}`}>
                <h3>{oneArtist.userName}</h3>
              </Link>
              {/* <ul>
                {oneArtist.projects.map((project, index) => {
                  return <li key={index}>{project.name}</li>;
                })}
              </ul> */}
            </div>
          );
        })}
      </div>
      <div>
        <h1>Designs</h1>
        {props.data.map(oneTechnique => {
          return (
            <div key={oneTechnique._id}>
              {oneTechnique.techniques.map(oneTechnique => {
                return (
                  <ul>
                    {oneTechnique}
                  </ul>
                )
              })}
            </div>
          )
        })}
      </div>
      <div>
        <h1>Homebase</h1>
        {props.data.map(oneHomebase => {
          return (
            <div> { oneHomebase.nationality }</div>
           
          )
        })}
      </div>
    </div>
  );
};

export default ShowArtists;
