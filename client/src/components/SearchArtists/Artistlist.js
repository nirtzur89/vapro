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

    searchArtist = (event) => {
        console.log("EVENT",event.target.value)
        this.setState({
            queryResult: event.target.value
        })
       
    }

    getAllArtists = () => {
        axios.get((process.env.REACT_APP_API_URL || "http://localhost:5000") + "/allartists")
            .then(allArtistsFromApi => {
                this.setState({ listOfAllArtists: allArtistsFromApi.data })
                console.log('allArtistsFromApi', allArtistsFromApi.data[0].artist)
            })
    }

    componentDidMount() {
        this.getAllArtists()
    }



    render() {

        console.log("STATE",this.state)

        const filteredArtists = this.state.listOfAllArtists.filter(e =>
            e.userName.includes(this.state.queryResult) ||
            e.nationality.includes(this.state.queryResult) ||
            e.techniques.join(', ').includes(this.state.queryResult) ||
            e.hashtags.join(', ').includes(this.state.queryResult)

        )
        console.log("listOfAllArtists!!!!jsndjkdbk", this.state.listOfAllArtists.techniques)
        console.log('filteredArtists',filteredArtists)

        return (
            <div>
                <SearchBar onSearch={this.searchArtist} />
                <ShowArtists data={filteredArtists} />

            </div>

        )
    }

}

export default Artistlist