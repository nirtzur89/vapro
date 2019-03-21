import React, { Component } from 'react'
import axios from 'axios';
import SearchBar from '../bars/SearchBar'

class Artistlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfAllArtists: []
        };
    }

    searchArtist = (artist, location, event, technique) => {
        console.log(`searching by ${artist}, ${location}, ${event} and ${technique}`)
    }

    componentDidMount() {
        axios.get("http://localhost:5000/allartists")
            .then(allArtistsFromApi => {
                this.setState({ listOfAllArtists: allArtistsFromApi.data })
            })

    }

    render() {
        return (
            <div>
                <SearchBar searchArtist={this.searchArtist} />
                <div>
                    {this.state.listOfAllArtists.map(oneArtist => {
                        return (
                            <div key={oneArtist._id}>
                                <h3>{oneArtist.userName}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }

}

export default Artistlist;