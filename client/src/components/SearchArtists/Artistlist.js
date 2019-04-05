import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ShowArtists from "./ShowArtists";

class Artistlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfAllArtists: []
    };
  }

  // searchArtist = event => {
  //   console.log("EVENT", event.target.value);
  //   this.setState({
  //     queryResult: event.target.value
  //   });
  // };

  getAllArtists = () => {
    axios

      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/artists",
        { withCredentials: true }
      )
      .then(allArtistsFromApi => {
        this.setState({ listOfAllArtists: allArtistsFromApi.data });
        console.log("artistsfromAPI", allArtistsFromApi.data);
      });

    console.log("stateeee", this.state);
  };

  componentDidMount() {
    this.getAllArtists();
  }

  render() {
    console.log("STATE", this.state);
    console.log('this.props', this.props)

    const filteredArtists = this.state.listOfAllArtists.filter(
      e =>
        e.artistName
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase()) ||
        e.nationality
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase()) ||
        e.techniques
          .join(", ")
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase()) ||
        e.hashtags
          .join(", ")
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase())
    );

    console.log("filteredArtists", filteredArtists);
    return (
      <div>
        {/* <SearchBar onSearch={this.searchArtist} /> */}
        <ShowArtists data={filteredArtists} />
      </div>
    );
  }
}

export default Artistlist;
