import React, { Component } from "react";
import "./SearchBar.css";
import { withRouter } from "react-router-dom";

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
  };

  handleSearch = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
    this.props.history.push("/artistlist");
  };

  render() {
    return (
      <div className="SearchBar">
        <link
          rel="stylesheet"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
        <form
          className="SearchBarform"
          action="/artistlist"
          onSubmit={this.handleSearch}
        >
          <input
            className="inputSearchbar input"
            type="search"
            name="searchTerm"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
          <i className="fa fa-search" />
          {/* <button className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>SEARCH</a>
                </button> */}
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
