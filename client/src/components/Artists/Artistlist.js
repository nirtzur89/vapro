import React, { Component } from 'react'
import axios from 'axios';

class Artistlist extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfAllArtists: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/allartists")
            .then(allArtistsFromApi => {
                this.setState({ listOfAllArtists: allArtistsFromApi.data })
            })

    }

    render() {
        console.log("this.state" ,this.state.listOfAllArtists)
        return (
            <div>
                {this.state.listOfAllArtists.map(oneArtist => {
                    return(
                        <div key={oneArtist._id}>
                            <h3>{oneArtist.firstName}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Artistlist;