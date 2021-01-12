import React, { Component } from "react";
import CovidUsData from "./CovidUsData";
import DeadPeople from "./DeadPeople";
import Hero from "./Images/Hero.jpg";
import {Link} from 'react-router-dom';

class HomePage extends Component {
  /* mandatory */
  constructor(props) {
    super(props);
    this.state = {
      CovUSdata: props.data,
      searchField: "",
      deadPerson: props.deadPersonCount,
    };
  }
  deadTrue(boolean) {
    if (boolean) {
      this.setState({ deadPerson: this.state.deadPerson + 1 });
    }
  }
  render() {
    const { CovUSdata, deadPerson } = this.state;
    console.log("deadHomePage", deadPerson);
    console.log("deadHomePage", CovUSdata);
    return (
      <main className="homePage">
        <div className="heroContainer">
          <div className="peopleCard">
            <div className="peopleCardInfo">
              <CovidUsData data={CovUSdata} />
              <Link to = "/info">
            <button>More Info</button>
            </Link>
            </div>
            <div className="sinceVisit">
              <p>{this.state.deadPerson} Dead Since Your Visit</p>
              <DeadPeople
                deadPersonCount={deadPerson}
                key={
                  deadPerson
                } /*key change forces render(updated props are sent)*/
              />
            </div>
          </div>
          <img
            className="hero"
            src={Hero}
            alt="Hero Doctor, PHOTOGRAPH BY EMIN BAYCAN on Unsplash"
          />
        </div>
        <div className="infoCardContainer">
          <div className="infoCard">
            <p>
              Sunt reprehenderit laboris proident eiusmod ut elit aliqua est
              aliqua esse.
            </p>
            <Link to = "/about">
            <button>About Dead Neighbors</button>
            </Link>
          </div>
          <div className="infoCard">
            <p>
              Sunt reprehenderit laboris proident eiusmod ut elit aliqua est
              aliqua esse.
            </p>
            <Link to = "/blog">
            <button>Visit Blog</button>
            </Link>
          </div>
          <div className="infoCard">
            <p>
              Sunt reprehenderit laboris proident eiusmod ut elit aliqua est
              aliqua esse.
            </p>
            <Link to = "/resources">
            <button>Resources</button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default HomePage;
