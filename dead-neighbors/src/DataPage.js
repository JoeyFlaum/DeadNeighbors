import React from 'react';
import CovidStateData from './CovidStateData';
import SearchFeature from './Search';
import CovidUsDataComplete from "./CovidUsDataComplete";
import Slider from './Slider';

class DataPage extends React.Component{
    constructor(props) {
        super(props) 
            this.state = {
                CovStateData: props.covStateData,
                CovUsData:props.covUsData,
                searchField: '',
                slider:true
            }
      }
  /*handle enter key and button click for state search*/
  searchHandler= (event)=>{
    console.log('app event',event.target)
    if(event.key === 'Enter'|| event.type==='click'){
      this.setState({searchField: event.target.value})
    }
  }       
  slideHandler=(prevState)=>{
    this.setState({slider:!this.state.slider})
  }
    render(){
      console.log(this.state.slider)
        const {CovStateData,searchField,CovUsData,slider} = this.state;
        let filteredStates = [];
        filteredStates = CovStateData.filter((stateData)=>{
        return (stateData.stateFullName.toLowerCase().includes(searchField.toLowerCase()));
        })
     
        return(
            <main className = 'dataPage' style={{marginTop:'200px'}}>
            <Slider
              boolean = {this.slideHandler.bind(this)} usStateBoolean = {slider}/>
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