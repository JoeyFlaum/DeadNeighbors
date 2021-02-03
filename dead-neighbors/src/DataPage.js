import React from "react";
import CovidStateData from "./CovidStateData";
import SearchFeature from "./Search";
import CovidUsDataComplete from "./CovidUsDataComplete";
import Slider from "./Slider";

class DataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CovStateData: props.covStateData,
      CovUsData: props.covUsData,
      searchField: "",
      slider: true,
      dataView: "",
    };
  }
  /*handle enter key and button click for state search*/
  searchHandler = (event) => {
    console.log("app event", event.target);
    if (event.key === "Enter" || event.type === "click") {
      this.setState({ searchField: event.target.value });
    }
  };
  slideHandler = () => {
    this.setState({ slider: !this.state.slider });
  };
  /*set state of radio button choice*/
  filterSortView=(event)=>{
    this.setState({dataView:event.target.value})
  }

  /*filter and sort state/us data*/
  viewHandler = (data) => {
    const {dataView}=this.state;
    if (dataView === "Deaths High To Low"){
      data.sort((a, b) => b.death - a.death);
      console.log("viewHandler", data);
      return data;
    }
    else {
      return data;
    }
    }
  
  deathHiLow = (data) =>{data.sort((a, b) => b.death - a.death);return data;}

  render() {
    const { CovStateData, searchField, CovUsData, slider } = this.state;
    let filteredStates = [];
    filteredStates = CovStateData.filter((stateData) => {
      return stateData.stateFullName
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    let unfilteredStates = [];
    unfilteredStates = CovStateData.slice(0, 56).filter((stateData) => {
      return stateData.stateFullName
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return (
      <main className="dataPage">
        <Slider
          boolean={this.slideHandler.bind(this)}
          usStateBoolean={slider}
        />
        <div className="infoSection">
          <div className = "data-radios" onChange = {this.filterSortView}>
            <input
              type="radio"
              name="sort-filter"
              value="Deaths High To Low"
            />
            <label htmlFor = "Deaths High To Low">Deaths High to Low</label>
            <input
              type="radio"
              name="sort-filter"
              value="Positive High To Low"
            />
            <label htmlFor = "Positive High To Low">Positive Increase Hight To Low</label>
            <input
              type="radio"
              name="sort-filter"
              value="Date Oldest To Recent"
            />
            <label htmlFor="Date Oldest To Recent">Date Oldest To Recent</label>
            <input
              type="radio"
              name="sort-filter"
              value="Date Recent To Oldest"
            />
            <label htmlFor = "Date Recent To Oldest">Date Recent To Oldest</label>
          </div>
          {!slider ? (
            <>
              <SearchFeature
                className="searchfeature"
                onEnter={this.searchHandler}
              />
              <div className="stateStats">
                <CovidStateData
                  key={searchField}
                  data={
                    searchField === ""
                      ? this.viewHandler(unfilteredStates)
                      : this.viewHandler(filteredStates)
                  }
                />
              </div>
            </>
          ) : (
            <div className="usStats">
              <CovidUsDataComplete data={CovUsData} />
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default DataPage;
