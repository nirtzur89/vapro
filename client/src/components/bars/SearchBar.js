import React, { Component } from 'react';



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            location: '',
            event: '',
            technique: '',
        }

        this.handleArtistNameChange = this.handleArtistNameChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleTechniqueChange = this.handleTechniqueChange.bind(this)
    }


    handleArtistNameChange = (event) => {
        this.setState({
            artist: event.target.value
        })
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleEventChange = (event) => {
        this.setState({
            event: event.target.value
        })
    }

    handleTechniqueChange = (event) => {
        this.setState({
            technique: event.target.value
        })
    }

    handleSearch = (event) => {
        this.props.searchArtist(this.state.artist, this.state.location, this.state.event, this.state.technique)
        event.preventDefault()
    }


    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input placeholder="Search Artists" onChange={this.handleArtistNameChange} />
                    <input placeholder="Location" onChange={this.handleLocationChange} />
                    <input placeholder="Event" onChange={this.handleEventChange} />
                    <input placeholder="Technique" onChange={this.handleTechniqueChange} />
                </div>
                <button className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </button>
            </div>

        )
    }


}

export default SearchBar;