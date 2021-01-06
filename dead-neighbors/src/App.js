import React, { Component } from 'react';
import './App.css';
import CovidStateData from './CovidStateData';
import CovidUsData from './CovidUsData';
import SearchFeature from './Search';
import CountDown from './Timer';
import DeadPeople from './DeadPeople';
import Hero from './Images/Hero.jpg';
 
class App extends Component {
  /* mandatory */
  constructor() {
    super() 
        this.state = {
            CovStateData: [],
            CovUSdata: [],
            searchField: '',
            CovidDeathsToday:0,
            deadPerson: 0,
            isHomePage:true,
            isDataPage:false
        }
  }
  deadTrue(boolean){
    if(boolean){this.setState({deadPerson:this.state.deadPerson+1})}
  }
  /*handle enter key and button click for state search*/
  searchHandler= (event)=>{
    console.log('app event',event.target)
    if(event.key === 'Enter'|| event.type==='click'){
      this.setState({searchField: event.target.value})
    }
  } 
  viewHandler=(event)=>{
    switch(event){
      case('Home'):this.setState({isHomePage:true,isDataPage:false});break;
      case('dataSearchPage'):this.setState({isHomePage:false, isDataPage:true});break;
      default:console.log('break');break;
    }

    console.log('viewEvent',event)
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
  render() { 
      const {CovUSdata,CovStateData,CovidDeathsToday,searchField, inputField, deadPerson} = this.state;
      console.log('deadPPPPP',deadPerson);
      console.log('home',this.state.isHomePage,'data',this.state.isDataPage)
      let filteredStates = [];
        if(CovStateData !== 0){
        filteredStates = CovStateData.filter((stateData)=>{
        return (stateData.stateFullName.toLowerCase().includes(searchField.toLowerCase()));
        })}
     
  return (
    <div className = 'pageContent'>
     
      <header>
        <div className = 'deadTitle'> 
          <div className = 'headerTitle'>
            <h1>Dead Neighbors</h1>
            <p><em>Bringing humanity to numbers</em></p>
          </div>
        </div>
          <nav className = 'headerNav'>
            <ul>
              <li onClick = {(e)=>this.viewHandler(e.target.innerText)}>Home</li>
              <li>Sources</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
          </nav>        
      </header>
      <main className = 'maintContent'>
        <div className = 'heroContainer'>
          <div className = 'peopleCard'>
            <div className = 'peopleCardInfo'>
              <CovidUsData data = {CovUSdata}/>
              <button onClick  = {(e)=>this.viewHandler(e.target.value)} value = "dataSearchPage">More Details</button>
            </div>
            <div className ='sinceVisit'>
              <p >{this.state.deadPerson} Dead Since Your Visit</p> 
              {(this.state.CovidDeathsToday === 0)
              ?
              <div></div>
              :
              <DeadPeople deadPersonCount ={deadPerson} key={deadPerson}/*key change forces render(updated props are sent)*//>
              }
            </div>
          </div>
          <img className = 'hero' src={Hero} alt = 'Hero Doctor, PHOTOGRAPH BY EMIN BAYCAN on Unsplash'/>
        </div>
        <div className = 'infoCardContainer'>
          <div className = 'infoCard'>
            <p>Sunt reprehenderit laboris proident eiusmod ut elit aliqua est aliqua esse.</p>
            <button >More Details</button>
          </div>
          <div className = 'infoCard'>
            <p>Sunt reprehenderit laboris proident eiusmod ut elit aliqua est aliqua esse.</p>
            <button>More Details</button>
          </div>
          <div className = 'infoCard'>
            <p>Sunt reprehenderit laboris proident eiusmod ut elit aliqua est aliqua esse.</p>
            <button>More Details</button>
          </div>
        </div>
      </main>
      <footer> 
      <div className = 'stats'>
          <CovidStateData
              data = {(searchField === "")?[]:filteredStates }/>
        </div>
        <h3>Footer stuff goes here...</h3>
        <div className="App">
            <h2>{this.state.searchField}</h2>
          </div> 
        <span>Hero Photo by <a href="https://unsplash.com/@aimlesscode?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Emin BAYCAN</a> on <a href="https://unsplash.com/s/photos/face-mask?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        {
          (this.state.CovidDeathsToday === 0)? 
            <div>Loading...</div>
            :
            <CountDown 
              usData ={CovidDeathsToday} 
              usDataAll = {CovUSdata}
              dead = {this.deadTrue.bind(this)}
              />
          }  
        <SearchFeature 
          className= "searchfeature"  
          onEnter = {this.searchHandler} 
          inputValue = {inputField}
        />
      </footer>
    </div>
  );
  }
}
 
export default App;