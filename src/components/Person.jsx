import React, { Component } from "react";
import image from "./pic.png";
import "./style.css"; // Import the CSS file

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Person: {
        fullName: "FRAJ Mohamed Amine",
        bio: "Hi I am Amine,30 years old and I am a Fullstack Js Developper",
        profession: "Web Developper",
        img: image,
      },
      count: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Person component is unmounting, interval cleared.");
  }

  render() {
    return (
      <div className="container">
        <p className="counter">{this.state.count}</p>
        <img src={this.state.Person.img} alt="profile pic" />
        <h1>{this.state.Person.fullName}</h1>
        <div className="phrases">
          <p>Bio: {this.state.Person.bio}</p>
          <p>Profession: {this.state.Person.profession}</p>
        </div>
      </div>
    );
  }
}
