import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import CovidStateData from './CovidStateData';
import CovidUsData from './CovidUsData';
import SearchFeature from './Search';
 
class App extends Component {
  /* mandatory */
  constructor() {
    super() 
        this.state = {
            CovStateData: [],
            CovUSdata: [],
            searchField: ""
        }
  }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }
  componentDidMount(){
      fetch('https://api.covidtracking.com/v1/states/daily.json')
          .then(response => response.json())
          .then(data => this.setState({CovStateData: data}));
      fetch('https://api.covidtracking.com/v1/us/daily.json')
      .then(response => response.json())
      .then(data => this.setState({CovUSdata: data}));         
  }
  mapHandler = (event) => {
    /*click event result*/
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
  return {
      "NJ": {fill: "navy", 
            clickHandler: (event) =>
            console.log('Custom handler for NJ', event.target.dataset)
            },
      "NY": {fill: "#CC0000"}
          };
  };
  
  render() {
      const {CovUSdata,CovStateData,searchField} = this.state;
      let filteredStates = [];
        if(CovStateData !== 0){
        filteredStates = CovStateData.filter((stateData)=>{
        return (stateData.state.toLowerCase().includes(searchField.toLowerCase()))
        })
        console.log(filteredStates)
        }

      return (
      <div>
        <div className="App">
          <SearchFeature className= "searchBox" onSearch={this.onSearchChange}/>
          <h2>{this.state.searchField}</h2>
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
        </div>
        <h1>hello</h1>
        <CovidStateData data = {filteredStates}/> 
        <CovidUsData data = {CovUSdata}/>
      </div> 
    );
  }
}
 
export default App;