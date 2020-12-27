import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import CovidStateData from './CovidStateData';
import CovidUsData from './CovidUsData';
import SearchFeature from './Search';
import CountDown from './Timer';
 
class App extends Component {
  /* mandatory */
  constructor() {
    super() 
        this.state = {
            CovStateData: [],
            CovUSdata: [],
            searchField: '',
            CovidDeathsToday:0,
        }
  }

  /*handle enter key and button click for state search*/
  searchHandler= (event)=>{
    console.log('app event',event.target)
    if(event.key === 'Enter'|| event.type==='click'){
      this.setState({searchField: event.target.value})
    }
  } 
  componentDidMount(){
      fetch('https://api.covidtracking.com/v1/us/daily.json')
          .then(response => response.json())
          .then(data =>{
            this.setState({CovUSdata: data})
            this.setState({CovidDeathsToday: data[0].deathIncrease})
          })
          .catch(err=>console.log(err));
      fetch('https://api.covidtracking.com/v1/states/daily.json')
        .then(response => response.json())
        .then(objectData=>objectData.map((data,i)=>{
          switch(objectData[i].state) {
            case ('AL'):objectData[i].stateFullName = "Alabama";break;
            case ('AK'):objectData[i].stateFullName = "Alaska";break;
            case ('AZ'):objectData[i].stateFullName = "Arizona";break;
            case ('AR'):objectData[i].stateFullName = "Arkansas";break;
            case ('CA'):objectData[i].stateFullName = "California";break;                    
            case ('CO'):objectData[i].stateFullName = "Colorado";break;
            case ('CT'):objectData[i].stateFullName = "Connecticut";break;
            case ('DE'):objectData[i].stateFullName = "Delaware";break;
            case ('FL'):objectData[i].stateFullName = "Florida";break; 
            case ('GA'):objectData[i].stateFullName = "Georgia";break;
            case ('HI'):objectData[i].stateFullName = "Hawaii";break;
            case ('ID'):objectData[i].stateFullName = "Idaho";break;
            case ('IL'):objectData[i].stateFullName = "Illinois";break;
            case ('IN'):objectData[i].stateFullName = "Indiana";break;
            case ('IA'):objectData[i].stateFullName = "Iowa";break;
            case ('KS'):objectData[i].stateFullName = "Kansas";break;
            case ('KY'):objectData[i].stateFullName = "Kentucky";break;  
            case ('LA'):objectData[i].stateFullName = "Louisiana";break;
            case ('ME'):objectData[i].stateFullName = "Maine";break;   
            case ('MD'):objectData[i].stateFullName = "Maryland";break;
            case ('MA'):objectData[i].stateFullName = "Massachusetts";break;
            case ('MI'):objectData[i].stateFullName = "Michigan";break;
            case ('MN'):objectData[i].stateFullName = "Minnesota";break;
            case ('MS'):objectData[i].stateFullName = "Mississippi";break;
            case ('MO'):objectData[i].stateFullName = "Missouri";break;
            case ('MT'):objectData[i].stateFullName = "Montana";break;
            case ('NE'):objectData[i].stateFullName = "Nebraska";break;
            case ('NV'):objectData[i].stateFullName = "Nevada";break;
            case ('NH'):objectData[i].stateFullName = "New Hampshire";break;
            case ('NJ'):objectData[i].stateFullName = "New Jersey";break;
            case ('NM'):objectData[i].stateFullName = "New Mexico";break; 
            case ('NY'):objectData[i].stateFullName = "New York";break;
            case ('NC'):objectData[i].stateFullName = "North Carolina";break;
            case ('ND'):objectData[i].stateFullName = "North Dakota";break;
            case ('OH'):objectData[i].stateFullName = "Ohio";break;  
            case ('OK'):objectData[i].stateFullName = "Oklahoma";break;
            case ('OR'):objectData[i].stateFullName = "Oregon"; break;   
            case ('PA'):objectData[i].stateFullName = "Pennsylvania";break;
            case ('RI'):objectData[i].stateFullName = "Rhode Island";break;
            case ('SC'):objectData[i].stateFullName = "South Carolina";break;
            case ('SD'):objectData[i].stateFullName = "South Dakota";break;
            case ('TN'):objectData[i].stateFullName = "Tennessee";break;
            case ('TX'):objectData[i].stateFullName = "Texas";break;
            case ('UT'):objectData[i].stateFullName = "Utah";break;
            case ('VT'):objectData[i].stateFullName = "Vermont";break;
            case ('VA'):objectData[i].stateFullName = "Virginia";break; 
            case ('WA'):objectData[i].stateFullName = "Washington";break;
            case ('WV'):objectData[i].stateFullName = "West Virginia";break; 
            case ('WI'):objectData[i].stateFullName = "Wisconsin";break;
            case ('WY'):objectData[i].stateFullName = "Wyoming";break;
            case ('AS'):objectData[i].stateFullName = "American Samoa";break;
            case ('DC'):objectData[i].stateFullName = "District Of Columbia";break;
            case ('GU'):objectData[i].stateFullName = "Guam";break;
            case ('MP'):objectData[i].stateFullName = "Norther Mariana Islands";break;
            case ('PR'):objectData[i].stateFullName = "Puerto Rico";break; 
            case ('VI'):objectData[i].stateFullName = "Virgin Islands";break;
            default: console.log('StateCaseNotCaught',objectData[i]);
      }return objectData[i]}))   
        .then(data =>
           this.setState({CovStateData: data}));
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
      const {CovUSdata,CovStateData,CovidDeathsToday,searchField, inputField} = this.state;
      console.log(CovidDeathsToday);
      let filteredStates = [];
        if(CovStateData !== 0){
        filteredStates = CovStateData.filter((stateData)=>{
        return (stateData.stateFullName.toLowerCase().includes(searchField.toLowerCase()));
        })}
      return (
      <div>
        <div className="App">
          <USAMap 
            customize={this.statesCustomConfig()} 
            onClick={this.mapHandler} 
          />
          <div className = 'overlaywrapper'>
            {
            (this.state.CovidDeathsToday === 0)? 
              <div>Loading...</div>:
              <CountDown 
                className = "timer" 
                usData ={CovidDeathsToday} 
                usDataAll = {CovUSdata}/>
            }
            <SearchFeature 
              className= "searchfeature"  
              onEnter = {this.searchHandler} 
              inputValue = {inputField}
            />
            <h2>{this.state.searchField}</h2>
            </div>
            <CovidUsData 
              data = {CovUSdata}/>
            <CovidStateData 
              data = {(searchField === "")?[]:filteredStates }/>
          </div> 
      </div> 
    );
  }
}
 
export default App;