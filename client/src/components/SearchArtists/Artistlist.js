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

    searchArtist = (artist) => {
        this.setState({
            query: artist.artist
        
        })}

    render() {
        const test = this.state.listOfAllArtists.filter(e=>{
                return e.userName === this.state.query
         } )

        console.log("listOfAllArtists", this.state.listOfAllArtists)

        return (
            <div>
                <SearchBar onSearch={this.searchArtist} />
                <ShowArtists data={test} />

            </div>

        )
    }

}

export default Artistlist;