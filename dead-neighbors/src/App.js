import React, { Component } from "react";
import News from "./News";
import HomePage from "./HomePage";
import Header from "./Header";
import DataPage from "./DataPage";
import DeadNeighborsPage from "./DeadNeighborsPage";
import Resources from "./Resources";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      CovStateData: [],
      CovUSdata: [],
      CovidDeathsToday: 0,
      deadPerson: 0,
    };
  }
  deadTrue(boolean) {
    if (boolean) {
      this.setState({ deadPerson: this.state.deadPerson + 1 });
    }
  }
  /*pull data from API, add state full names with switch statement*/
  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/us/daily.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ CovUSdata: data });
        this.setState({ CovidDeathsToday: data[0].deathIncrease });
      })
      .catch((err) => console.log(err));
    fetch("https://api.covidtracking.com/v1/states/daily.json")
      .then((response) => response.json())
      .then((objectData) =>
        objectData.map((data, i) => {
          switch (objectData[i].state) {
            case "AL":
              objectData[i].stateFullName = "Alabama";
              break;
            case "AK":
              objectData[i].stateFullName = "Alaska";
              break;
            case "AZ":
              objectData[i].stateFullName = "Arizona";
              break;
            case "AR":
              objectData[i].stateFullName = "Arkansas";
              break;
            case "CA":
              objectData[i].stateFullName = "California";
              break;
            case "CO":
              objectData[i].stateFullName = "Colorado";
              break;
            case "CT":
              objectData[i].stateFullName = "Connecticut";
              break;
            case "DE":
              objectData[i].stateFullName = "Delaware";
              break;
            case "FL":
              objectData[i].stateFullName = "Florida";
              break;
            case "GA":
              objectData[i].stateFullName = "Georgia";
              break;
            case "HI":
              objectData[i].stateFullName = "Hawaii";
              break;
            case "ID":
              objectData[i].stateFullName = "Idaho";
              break;
            case "IL":
              objectData[i].stateFullName = "Illinois";
              break;
            case "IN":
              objectData[i].stateFullName = "Indiana";
              break;
            case "IA":
              objectData[i].stateFullName = "Iowa";
              break;
            case "KS":
              objectData[i].stateFullName = "Kansas";
              break;
            case "KY":
              objectData[i].stateFullName = "Kentucky";
              break;
            case "LA":
              objectData[i].stateFullName = "Louisiana";
              break;
            case "ME":
              objectData[i].stateFullName = "Maine";
              break;
            case "MD":
              objectData[i].stateFullName = "Maryland";
              break;
            case "MA":
              objectData[i].stateFullName = "Massachusetts";
              break;
            case "MI":
              objectData[i].stateFullName = "Michigan";
              break;
            case "MN":
              objectData[i].stateFullName = "Minnesota";
              break;
            case "MS":
              objectData[i].stateFullName = "Mississippi";
              break;
            case "MO":
              objectData[i].stateFullName = "Missouri";
              break;
            case "MT":
              objectData[i].stateFullName = "Montana";
              break;
            case "NE":
              objectData[i].stateFullName = "Nebraska";
              break;
            case "NV":
              objectData[i].stateFullName = "Nevada";
              break;
            case "NH":
              objectData[i].stateFullName = "New Hampshire";
              break;
            case "NJ":
              objectData[i].stateFullName = "New Jersey";
              break;
            case "NM":
              objectData[i].stateFullName = "New Mexico";
              break;
            case "NY":
              objectData[i].stateFullName = "New York";
              break;
            case "NC":
              objectData[i].stateFullName = "North Carolina";
              break;
            case "ND":
              objectData[i].stateFullName = "North Dakota";
              break;
            case "OH":
              objectData[i].stateFullName = "Ohio";
              break;
            case "OK":
              objectData[i].stateFullName = "Oklahoma";
              break;
            case "OR":
              objectData[i].stateFullName = "Oregon";
              break;
            case "PA":
              objectData[i].stateFullName = "Pennsylvania";
              break;
            case "RI":
              objectData[i].stateFullName = "Rhode Island";
              break;
            case "SC":
              objectData[i].stateFullName = "South Carolina";
              break;
            case "SD":
              objectData[i].stateFullName = "South Dakota";
              break;
            case "TN":
              objectData[i].stateFullName = "Tennessee";
              break;
            case "TX":
              objectData[i].stateFullName = "Texas";
              break;
            case "UT":
              objectData[i].stateFullName = "Utah";
              break;
            case "VT":
              objectData[i].stateFullName = "Vermont";
              break;
            case "VA":
              objectData[i].stateFullName = "Virginia";
              break;
            case "WA":
              objectData[i].stateFullName = "Washington";
              break;
            case "WV":
              objectData[i].stateFullName = "West Virginia";
              break;
            case "WI":
              objectData[i].stateFullName = "Wisconsin";
              break;
            case "WY":
              objectData[i].stateFullName = "Wyoming";
              break;
            case "AS":
              objectData[i].stateFullName = "American Samoa";
              break;
            case "DC":
              objectData[i].stateFullName = "District Of Columbia";
              break;
            case "GU":
              objectData[i].stateFullName = "Guam";
              break;
            case "MP":
              objectData[i].stateFullName = "Norther Mariana Islands";
              break;
            case "PR":
              objectData[i].stateFullName = "Puerto Rico";
              break;
            case "VI":
              objectData[i].stateFullName = "Virgin Islands";
              break;
            default:
              console.log("StateCaseNotCaught", objectData[i]);
          }
          return objectData[i];
        })
      )
      .then((data) => this.setState({ CovStateData: data }));

  }
  render() {
    const {
      CovUSdata,
      CovStateData,
      CovidDeathsToday,
      deadPerson,
    } = this.state;
    return (
      <Router>
        <div className="pageContent">
          <div
            style={{
              position: "relative",
              zIndex: "0",
              width: "0px",
              height: "0px",
              top: "0",
              fontSize: "1px",
            }}
          >
          </div>
            {CovidDeathsToday !== 0 ? (
              <DeadNeighborsPage
                usData={CovidDeathsToday}
                usDataAll={CovUSdata}
                dead={this.deadTrue.bind(this)}
              />
            ) : (
              <div>Loading...</div>
            )}

          <Header screenWidth={this.state.screenWidth} />

            <div className = 'routes'>
          <Switch>
            <Route
              path="/"
              exact
              render={(routeProps) =>
                CovUSdata.length !== 0 ? (
                  <HomePage
                    data={CovUSdata}
                    deadPersonCount={deadPerson}
                    key={
                      deadPerson
                    } /*key change forces render(updated props are sent)*/
                    {...routeProps}
                  />
                ) : (
                  <div className="blank"></div>
                )
              }
            />
            <Route path="/news" component={News} />
            <Route
              path="/info"
              exact
              render={(routeProps) =>
                CovStateData.length !== 0 ? (
                  <DataPage covStateData={CovStateData} covUsData ={CovUSdata} {...routeProps} />
                ) : (
                  <div className="blank"></div>
                )
              }
            />
            <Route path="/resources" component={Resources} />
            <Route path="/about" component={About} />
          </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
