// Reuseable Card component for 5 days brief weather info after submit the city.

import React, { Component } from "react";

class Card extends Component {
  render() {
    const { weather } = this.props;
    const date = new Date(weather.dt_txt.replace(/-/g, "/"))
      .toString()
      .split(" ");
    return (
      <div className="Card">
        <div className="card border-dark">
          <img
            src={require(`../assets/images/weather-icons/${weather.weather[0].icon}.svg`)}
            className="card-img-top"
            alt=""
          />
          <div className="card-body text-center pt-4">
            <p>{date[0]}</p>
            <p>
              {date[2]}, {date[1]}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
