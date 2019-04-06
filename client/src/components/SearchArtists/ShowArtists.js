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
                  <img
                    className="ArtistPic"
                    alt="ArtistPic"
                    src={oneArtist.avatar}
                  />
                  <div class="middle">
                    <Link to={`/artists/${oneArtist._id}`}>
                      <div className="ArtistName">{oneArtist.artistName}</div>
                    </Link>
                  </div>
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
              return _.sampleSize(Events.events, 1).map(oneEvent => {
                return (
                  <div className="Event color-change-3x" key={Events._id}>
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
              return _.sampleSize(Techniques.techniques).map(oneTechnique => {
                return (
                  <div className="Design color-change-3x" key={Techniques._id}>
                    <div className="DesignName">{oneTechnique}</div>
                  </div>
                );
              });
            })}
          </div>
          <div className="pickT" />
        </div>
      </div>
    </div>
  );
};

export default ShowArtists;
