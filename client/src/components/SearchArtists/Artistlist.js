import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ShowArtists from "./ShowArtists";
import "./Artistlist.css";
import artistList from "../images/ArtistList.png";
import eventList from "../images/EventList.png";
import designList from "../images/designList.png";

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
      .get((process.env.REACT_APP_API_URL || "http://localhost:5000") + "/user")
      .then(allArtistsFromApi => {
        this.setState({ listOfAllArtists: allArtistsFromApi.data });
      });
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
      <div className="wrapperArtistList">
        <ShowArtists data={filteredArtists} />
        <div className="flex-containerA" key="A" id="slideA" autoPlay loop>
          <img className="pickA" alt="ArtistList" src={artistList} />
          <div className="Artist">hi</div>
          <div className="Artist">hi</div>
          <div className="Artist">hi</div>
          <div className="Artist">hi</div>
          <div className="pickA" />
        </div>
        <div className="flex-containerE" key="E" id="slideE" autoPlay loop>
          <div className="pickE" />
          <div className="Event">hi</div>
          <div className="Event">hi</div>
          <div className="Event">hi</div>
          <div className="Event">hi</div>
          <img className="pickE" alt="EventList" src={eventList} />
        </div>
        <div className="flex-containerA" key="T" id="slideT" autoPlay loop>
          <img className="pickT" alt="TechniqueList" src={designList} />
          <div className="Design">hi</div>
          <div className="Design">hi</div>
          <div className="Design">hi</div>
          <div className="Design">hi</div>
          <div className="pickT" />
        </div>
        <SearchBar onSearch={this.searchArtist} />
      </div>
    );
  }
}

export default Artistlist;
