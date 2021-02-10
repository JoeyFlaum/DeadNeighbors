import React, { Component } from "react";
import CovidUsData from "./CovidUsData";
import DeadPeople from "./DeadPeople";
import Hero from "../Images/Hero.jpg";
import Resources from "../Images/Resources.jpg";
import Typewriter from "../Images/Typewriter.jpg";
import { Link } from "react-router-dom";

class HomePage extends Component {
  /* mandatory */
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      deadPerson: 0,
    };
  }
  componentDidMount() {
    this.setState({ deadPerson: this.props.deadPersonCount });
  }
  render() {
    const deadPerson = this.props.deadPersonCount;
    const infoCards = [
      {
        className: "infoCard about-deadneighbors",
        image:
          "https://ggsc.s3.amazonaws.com/images/uploads/masks_in_crowd.jpg",
        alt: "Masks In Crowd",
        link:"/about",
        buttonText: "About Dead Neighbors",
      },
      {
        className: "infoCard news-deadneighbors",
        image:
        Typewriter,
        alt: "Typewriter with #Covid-19 on paper",
        link:"/news",
        buttonText: "News Articles",
      },
      {
        className: "infoCard resources-deadneighbors",
        image:
        Resources,
        alt: "Person in PPE spraying the words: STOP THE SPREAD",
        link:"/resources",
        buttonText: "Covid Resources",
      } 
    ];
    return (
      <main className="homePage">
        <div className="heroContainer">
          <div className="peopleCard">
            <div className="peopleCardInfo">
              <CovidUsData
                date={this.props.date}
                /*most recent recorded date*/ deaths={
                  this.props.totalDeaths
                } /*most recent date death count*/
              />
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
          {infoCards.map((info, i)=>{
            return(
              <div className={info.className} key = {i}>
            <img
              src={info.image}
              alt={info.alt}
            />
            <Link to={info.link}>
              <button>
                <div>{info.buttonText}</div>
              </button>
            </Link>
          </div>
            )
          }
          )
          }
        </div>
      </main>
    );
  }
}

export default HomePage;
