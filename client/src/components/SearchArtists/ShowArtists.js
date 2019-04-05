import React from "react";
import { Link } from "react-router-dom";
import "./Artistlist.css";
import artistList from "../images/artists.png";
import eventList from "../images/events.png";
import designList from "../images/designs.png";
import _ from "lodash";

const ShowArtists = props => {
  return (
    <div>
      <div className="wrapperArtistList">
        <div className="flex-containerA" key="A" id="slideA" autoPlay loop>
          <img className="pickA" alt="ArtistList" src={artistList} />
          <div className="flex-containerInner" key="A" id="slideA">
            {_.sampleSize(props.data, 4).map(oneArtist => {
              return (
                <div className="Artist" key={oneArtist._id}>
                  <Link to={`/artists/${oneArtist._id}`}>
                    <div className="ArtistName">{oneArtist.userName}</div>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="pickA" />
        </div>

        <div className="flex-containerE" key="E" id="slideE" autoPlay loop>
          <div className="pickE" />

          <div className="flex-containerInner" key="E" id="slideE">
            {_.sampleSize(props.data, 4).map(Events => {
              return _.sampleSize(Events.events, 2).map(oneEvent => {
                return (
                  <div className="Event" key={oneEvent._id}>
                    <div className="EventName">{oneEvent}</div>
                  </div>
                );
              });
            })}
          </div>

          <img className="pickE" alt="EventList" src={eventList} />
        </div>
        <div className="flex-containerA" key="T" id="slideT" autoPlay loop>
          <img className="pickT" alt="TechniqueList" src={designList} />
          <div className="flex-containerInner" key="T" id="slideT">
            {_.sampleSize(props.data, 4).map(Techniques => {
              return _.sampleSize(Techniques.techniques, 2).map(
                oneTechnique => {
                  return (
                    <div className="Design" key={Techniques._id}>
                      <div className="DesignName">{oneTechnique}</div>
                    </div>
                  );
                }
              );
            })}
          </div>
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
