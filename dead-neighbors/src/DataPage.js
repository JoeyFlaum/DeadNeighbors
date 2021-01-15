import React from 'react';
import CovidStateData from './CovidStateData';
import SearchFeature from './Search';
import CovidUsDataComplete from "./CovidUsDataComplete";

class DataPage extends React.Component{
    constructor(props) {
        super(props) 
            this.state = {
                CovStateData: props.covStateData,
                CovUsData:props.covUsData,
                searchField: '',
            }
      }
  /*handle enter key and button click for state search*/
  searchHandler= (event)=>{
    console.log('app event',event.target)
    if(event.key === 'Enter'|| event.type==='click'){
      this.setState({searchField: event.target.value})
    }
  }       
    render(){
        const {CovStateData,searchField,CovUsData} = this.state;
        let filteredStates = [];
        filteredStates = CovStateData.filter((stateData)=>{
        return (stateData.stateFullName.toLowerCase().includes(searchField.toLowerCase()));
        })
     
        return(
            <main className = 'dataPage' style={{marginTop:'200px'}}>

            <label class="switch">
  <input type="checkbox"></input>
  <span class="slider"></span>
            </label>

            <SearchFeature 
              className= "searchfeature"  
              onEnter = {this.searchHandler} 
            />
            <div className = 'stateStats'>
              <CovidStateData
                  data = {(searchField === "")?[]:filteredStates}/>
            </div>
            <div className = 'usStats'>

            <CovidUsDataComplete data ={CovUsData}/>
            </div>
            </main>
            
        )
    }
}

export default DataPage;