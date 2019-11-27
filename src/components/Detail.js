// After click the brief weather info one of those 5, This detail page gets called.

import React, { Component } from "react";
import { connect } from "react-redux";

class Detail extends Component {
  // Go back to the 5 days list.
  handleClick = () => {
    let city = this.props.match.params.city;
    this.props.history.push(`/${city}`);
  };

  render() {
    let city = this.props.match.params.city;
    let num = this.props.match.params.num;
    const detail = this.props.data.list[num];
    const date = new Date(detail.dt_txt.replace(/-/g, "/"))
      .toString()
      .split(" ");

    // Get the max and min temp during the whole day.
    // Weather data of single day is divided in 8 each 3 hour.
    const list = this.props.data.list.slice(num, Number(num) + 8);

    let maxArr = [];
    list.map(v => maxArr.push(v.main.temp_max));
    const max = Math.round(Math.max(...maxArr));

    let minArr = [];
    list.map(v => minArr.push(v.main.temp_min));
    const min = Math.round(Math.min(...minArr));

    return (
      <div className="Detail">
        <div className="Detail">
          <button
            id="back-btn"
            className="btn btn-info"
            onClick={this.handleClick}
          >
            Back
          </button>
          <div className="container ">
            <div className="row">
              <div className="detail-left detail col-sm-12 col-md-6 text-center">
                <img
                  src={require(`../assets/images/weather-icons/${detail.weather[0].icon}.svg`)}
                  className="card-img-top"
                  alt=""
                />
                <p>{date[0]}</p>
                <p>
                  {date[2]}, {date[1]}
                </p>
              </div>
              <div className="detail-right detail col-sm-12 col-md-6 text-center">
                <p className="display-4">{city}</p>
                <p>{detail.weather[0].description}</p>
                <p>min temp: {max} degrees</p>
                <p>max temp: {min} degrees</p>
                <p>humidity: {detail.main.humidity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(Detail);
