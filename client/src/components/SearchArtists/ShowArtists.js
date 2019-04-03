import React from "react";
import { Link } from "react-router-dom";

const ShowArtists = props => {
  console.log("props.data", props.data);
  return (
    <div>
      <div>
        {props.data.map(oneArtist => {
          // console.log("u", oneArtist.hashtags)
          return (
            <div key={oneArtist._id}>
              <Link to={`/artists/${oneArtist._id}`}>
                <h3>{oneArtist.userName}</h3>
              </Link>
              <ul>
                {oneArtist.projects.map((project, index) => {
                  return <li key={index}>{project.name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowArtists;
