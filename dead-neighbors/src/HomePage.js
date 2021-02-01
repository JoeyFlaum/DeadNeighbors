import React, { Component } from "react";
import CovidUsData from "./CovidUsData";
import DeadPeople from "./DeadPeople";
import Hero from "./Images/Hero.jpg";
import Resources from "./Images/Resources.jpg";
import Typewriter from "./Images/Typewriter.jpg";
import { Link } from "react-router-dom";

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
              <Link to="/info">
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
          <div className="infoCard about-deadneighbors">
            <img
              src="https://ggsc.s3.amazonaws.com/images/uploads/masks_in_crowd.jpg"
              alt="Sick People"
            />
            <Link to="/about">
              <button>
                <div className="click-me">About Dead Neighbors</div>
              </button>
            </Link>
          </div>
          <div className="infoCard blog-deadneighbors">
            <img src={Typewriter} alt="Typewriter with #Covid-19 on paper" />
            <Link to="/about">
              <button>
                <div className="click-me">Dead Neighbors Blog</div>
              </button>
            </Link>
          </div>
          <div className="infoCard resources-deadneighbors">
            <img
              src={Resources}
              alt="Person in PPE spraying the words: STOP THE SPREAD"
            />
            <Link to="/resources">
              <button>
                <div className="click-me">Covid Resources</div>
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default HomePage;
