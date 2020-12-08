import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import CovidData from './CovidData'
 
class App extends Component {
  /* mandatory */
  constructor() {
    super() 
        this.state = {
            cData: []
        }
}

componentDidMount(){
    fetch('https://api.covidtracking.com/v1/states/daily.json')
        .then(response => response.json())
        .then(data => this.setState({cData: data}));
               
}
  mapHandler = (event) => {
    /*click event result*/
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
  return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => 
          console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }

    };
  };
  render() {
    const stateData = this.state.cData;
    let mapCovid =[];
    mapCovid = stateData.map((number,i)=>{
    // console.log('number',number);
    return number;
    })
    return (
      <>
      <div className="App">
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
      {/* {console.log('stateData',stateData)} */}
      {/* {console.log('mapCovid',mapCovid)} */}
      <h1>hello</h1>
      <CovidData data ={mapCovid}/>
      </> 
    );
  }
}
 
export default App;