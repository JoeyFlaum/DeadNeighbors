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
                slider:true,
                originalView:true,
                sortWorst:false,
                filterMostRecent:false,
            }
      }
  /*handle enter key and button click for state search*/
  searchHandler= (event)=>{
    console.log('app event',event.target)
    if(event.key === 'Enter'|| event.type ==='click'){
      this.setState({searchField: event.target.value})
    }
  }       
  slideHandler=()=>{
    this.setState({slider:!this.state.slider})
  }
  /*filter and sort state/us data*/
  viewHandler=(data)=>{
    data.sort()
  }
    render(){
      console.log(this.state.slider)
        const {CovStateData,searchField,CovUsData,slider} = this.state;
        let filteredStates = [];
        filteredStates = CovStateData.filter((stateData)=>{
        return (stateData.stateFullName.toLowerCase().includes(searchField.toLowerCase()));
        })
        let unfilteredStates = []
        unfilteredStates = CovStateData.slice(0,56).filter((stateData)=>{
          return (stateData.stateFullName.toLowerCase().includes(searchField.toLowerCase()));
        })
        return(
            <main className = 'dataPage'>
            <Slider
              boolean = {this.slideHandler.bind(this)} usStateBoolean = {slider}/>
          <div className = "infoSection">
          {!slider?
          (<>
            <SearchFeature 
              className= "searchfeature"  
              onEnter = {this.searchHandler} 
            />
            <div className = 'stateStats'>
              <CovidStateData
                  key = {searchField}
                  data = {(searchField === "")?/*this.viewHandler*/(unfilteredStates):filteredStates}/>
            </div>
            </>
            ):(
            <div className = 'usStats'>
            <CovidUsDataComplete data ={CovUsData}/>
            </div>
            )}
            </div>
            </main>
            
        )
    }
}

export default DataPage;