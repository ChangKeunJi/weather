// Component for list 5 days of brief info.

import React, { Component } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData } from "../action/index";

class List extends Component {
  componentDidMount() {
    let city = this.props.match.params.city;
    this.props.fetchData(city);
  }

  // Hhen the api request goes wrong. (e.g wroing city)
  // It will bring you to main page and you can see alert message.
  componentDidUpdate() {
    if (this.props.error) {
      alert("error");
      this.props.history.push("/");
    }
  }

  // The reason why I gave them number is that data I get from API is array of 40 element every 3 hour.
  // And this is the best idea I can think of to divide array in 5 days.

  render() {
    const { data } = this.props;
    const cardList =
      data && !this.props.error ? (
        <div className="">
          <h2 className="text-center p-5">{data.city.name}</h2>
          <div className="d-flex flex-wrap justify-content-around ">
            <Link to={`${data.city.name}` + "/detail/0"}>
              <Card className="col-md-6 hover" weather={data.list[0]} />
            </Link>
            <Link to={`${data.city.name}` + "/detail/8"}>
              <Card className="col-md-6 hover" weather={data.list[8]} />
            </Link>
            <Link to={`${data.city.name}` + "/detail/16"}>
              <Card className="col-md-6 hover" weather={data.list[16]} />
            </Link>
            <Link to={`${data.city.name}` + "/detail/24"}>
              <Card className="col-md-6 hover" weather={data.list[24]} />
            </Link>
            <Link to={`${data.city.name}` + "/detail/32"}>
              <Card className="col-md-6 hover" weather={data.list[32]} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="List">Loading...</div>
      );

    return <div className="List">{cardList}</div>;
  }
}
const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchData })(List);
