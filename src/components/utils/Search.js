// Reuseable Search bar component.

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData } from "../../action/index";

class Search extends Component {
  state = { term: "" };

  // Get the value from input.
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  // Action "fetchData" receives the value from local state and gets called.
  onFormSubmit = e => {
    e.preventDefault();
    let city = this.state.term.toLowerCase();
    this.props.fetchData(city);
    this.props.history.push(`/${city}`);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="Search">
        <form className="form-inline" onSubmit={this.onFormSubmit}>
          <input
            type="search"
            className="form-control mr-sm-2"
            onChange={this.onInputChange}
            value={this.state.term}
          />
          <button className="btn btn-outline-dark my-2 my-sm-0 " type="submit">
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default withRouter(connect(mapStateToProps, { fetchData })(Search));
