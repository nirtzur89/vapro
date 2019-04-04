import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ShowArtists from "./ShowArtists";
import "./Artistlist.css";
import artistList from "../images/ArtistList.png";
import eventList from "../images/EventList.png";
import designList from "../images/designList.png";
import ArtistSignupForm from "../Auth/AuthForms/ArtistSignupForm";

class Artistlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfAllArtists: [],
      queryResult: ""
    };
  }

  searchArtist = event => {
    console.log("EVENT", event.target.value);
    this.setState({
      queryResult: event.target.value
    });
  };

  getAllArtists = () => {
    axios
      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/artists"
      )
      .then(allArtistsFromApi => {
        this.setState({ listOfAllArtists: allArtistsFromApi.data });
      });
    console.log("stateeee", this.state);
  };

  componentDidMount() {
    this.getAllArtists();
  }

  render() {
    console.log("STATE", this.state);

    const filteredArtists = this.state.listOfAllArtists.filter(
      e =>
        e.userName.includes(this.state.queryResult) ||
        e.nationality.includes(this.state.queryResult) ||
        e.techniques.join(", ").includes(this.state.queryResult) ||
        e.hashtags.join(", ").includes(this.state.queryResult)
    );
    console.log(
      "listOfAllArtists!!!!jsndjkdbk",
      this.state.listOfAllArtists.techniques
    );
    console.log("filteredArtists", filteredArtists);

    return (
      <div>
        <div className="wrapperArtistList">
          <ShowArtists data={filteredArtists} />
          <div key="A" className="pickA">
            <img id="slideA" alt="ArtistList" src={artistList} autoPlay loop />
          </div>
          <div key="E" className="pickE">
            <img id="slideE" alt="EventList" src={eventList} autoPlay loop />
          </div>
          <div key="T" className="pickT">
            <img
              id="slideT"
              alt="TechniqueList"
              src={designList}
              autoPlay
              loop
            />
          </div>
          <SearchBar onSearch={this.searchArtist} />
        </div>
      </div>
    );
  }
}

export default Artistlist;
