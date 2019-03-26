import React, { Component } from 'react'
import axios from 'axios';
import SearchBar from './SearchBar'
import ShowArtists from './ShowArtists'

class Artistlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfAllArtists: [],
            queryResult: ""
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/allartists")
            .then(allArtistsFromApi => {
                this.setState({ listOfAllArtists: allArtistsFromApi.data })
            })

    }

    searchArtist = (searchTerm) => {
        this.setState({
            queryResult: searchTerm.searchTerm
        })
    // console.log("STATE",this.state, searchTerm)
}

    render() {
        const filteredArtists = this.state.listOfAllArtists.filter(e=>
            e.userName.includes(this.state.queryResult) ||
            e.nationality.includes(this.state.queryResult) ||
            // e.techniques.includes(this.state.queryResult) ||
            // e.events.includes(this.state.queryResult) ||
            e.locations.includes(this.state.queryResult) 
            // || e.hashtags.includes(this.state.queryResult)

          )

        console.log("listOfAllArtists", this.state.listOfAllArtists)

        return (
            <div>
                <SearchBar onSearch={this.searchArtist} />
                <ShowArtists data={filteredArtists} />

            </div>

        )
    }

}

export default Artistlist