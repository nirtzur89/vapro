import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            event: '',
            technique: '',
        }
    }

    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
        this.props.onSearch(this.state)
      };


    handleSearch = (event) => {

        event.preventDefault()
    }


    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input name="artist" placeholder="Search Artists" onChange={this.onChange} />
                    <input name="event" placeholder="Event" onChange={this.onChange} />
                    <input name="technique" placeholder="Technique" onChange={this.onChange} />
                </div>
                <button className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>SEARCH</a>
                </button>
            </div>

        )
    }
}

export default SearchBar;