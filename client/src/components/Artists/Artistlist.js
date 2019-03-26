import React, { Component } from 'react'
import axios from 'axios';
import './Artistlist.css'; 


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

Artistlist = () => {
    return (
        <div className="wrapperArtistlist">
     <div key= "1" className="Artist embed-responsive embed-responsive-4by3">
     <video id = "slide1" className="video-fluid1 z-depth-1" autoPlay loop controls muted>
  <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" /></video>
         </div>
     <div key= "2" className="Event embed-responsive embed-responsive-4by3">
     <video id = "slide2" className="video-fluid2 z-depth-1" autoPlay loop controls muted>
  <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" /></video>
 </div> 
 <div key= "3" className="Technique embed-responsive embed-responsive-4by3">
    <video id = "slide3" className="video-fluid3 z-depth-1" autoPlay loop controls muted>
  <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" /></video>
</div>
</div>
)
}


export default Artistlist;