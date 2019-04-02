import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  onChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
    this.props.onSearch(this.state);
  };

  handleSearch = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-fields">
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />
          <form action="/artistlist">
            <input
              className="inputSearchbar"
              type="search"
              name="searchTerm"
              placeholder="Search"
              onChange={this.props.onSearch}
            />
            <i className="fa fa-search" />
            {/* <button className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>SEARCH</a>
                </button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
