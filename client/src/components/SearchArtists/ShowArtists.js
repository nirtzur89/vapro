import React from "react";
import { Link } from "react-router-dom";
import "./Artistlist.css";
import artistList from "../images/ArtistList.png";
import eventList from "../images/EventList.png";
import designList from "../images/designList.png";
import _ from "lodash";

const ShowArtists = props => {
  return (
    <div>
      <div className="wrapperArtistList">
        <div className="flex-containerA" key="A" id="slideA" autoPlay loop>
          <img className="pickA" alt="ArtistList" src={artistList} />

          {_.sampleSize(props.data, 4).map(oneArtist => {
            return (
              <div className="Artist" key={oneArtist._id}>
                <Link to={`/artists/${oneArtist._id}`}>
                  <h3>{oneArtist.userName}</h3>
                </Link>
              </div>
            );
          })}

          <div className="pickA" />
        </div>
        <div className="flex-containerE" key="E" id="slideE" autoPlay loop>
          <div className="pickE" />
          {_.sampleSize(props.data, 4).map(oneArtist => {
            return (
              <div className="Event" key={oneArtist._id}>
                <Link to={`/artists/${oneArtist._id}`}>
                  <h3>{oneArtist.userName}</h3>
                </Link>
              </div>
            );
          })}
          <img className="pickE" alt="EventList" src={eventList} />
        </div>
        <div className="flex-containerA" key="T" id="slideT" autoPlay loop>
          <img className="pickT" alt="TechniqueList" src={designList} />

          {_.sampleSize(props.data, 4).map(Techniques => {
            return _.sampleSize(Techniques.techniques, 2).map(oneTechnique => {
              return (
                <div className="Design" key={Techniques._id}>
                  {oneTechnique}
                </div>
              );
            });
          })}
          <div className="pickT" />
        </div>
      </div>
      {/* <div>
        <div>
          <h1>Artists</h1>
          {props.data.map(oneArtist => {
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
        <div>
          <h1>Designs</h1>
          {props.data.map(oneTechnique => {
            return (
              <div key={oneTechnique._id}>
                {oneTechnique.techniques.map(oneTechnique => {
                  return <ul>{oneTechnique}</ul>;
                })}
              </div>
            );
          })}
        </div>
        <div>
          <h1>Homebase</h1>
          {props.data.map(oneHomebase => {
            return <div> {oneHomebase.nationality}</div>;
          })}
        </div>
      </div> */}
    </div>
  );
};

export default ShowArtists;
