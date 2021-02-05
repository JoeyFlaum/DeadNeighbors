import React from "react";
import CovidStateData from "./CovidStateData";
import SearchFeature from "./Search";
import CovidUsDataComplete from "./CovidUsDataComplete";
import Slider from "./Slider";

class DataPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      slider: true,
      dataView: "",
    };
    this.slideHandler = this.slideHandler.bind(this);
  }
  /*handle enter key and button click for state search*/
  searchHandler = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      this.setState({ searchField: event.target.value });
    }
  };
  slideHandler = () => {
    this.setState({ slider: !this.state.slider });
  };
  /*set state of radio input choice*/
  filterSortView = (event) => {
    this.setState({ dataView: event.target.value });
  };

  /*filter and sort state/us data*/
  viewHandler = (data) => {
    const { dataView } = this.state;
    const CovStateData = this.props.covStateData
    if (dataView === "Death Increase Daily - High To Low") {
      data.sort((a, b) => b.deathIncrease - a.deathIncrease || b.date - a.date);
      return data;
    } else if (dataView === "Death Increase Daily - Low To High") {
      data.sort((a, b) => a.deathIncrease - b.deathIncrease || a.date - b.date);
      return data;
    } else if (dataView === "Positive Increase - High To Low") {
      data.sort(
        (a, b) => b.positiveIncrease - a.positiveIncrease || b.date - a.date
      );
      return data;
    } else if (dataView === "Positive Increase - Low To High") {
      data.sort(
        (a, b) => a.positiveIncrease - b.positiveIncrease || a.date - b.date
      );
      return data;
    } else if (dataView === "Date - Oldest To Recent") {
      data.sort((a, b) => a.date - b.date);
      return data;
    } else if (dataView === "Date - Recent To Oldest") {
      data.sort((a, b) => b.date - a.date);
      return data;
    } else if (dataView === "Worst Day - By State") {
      /*sort objects alphabetical order by state and then by deaths*/
      CovStateData.sort((a, b) => {
        return (
          a.stateFullName
            .toLowerCase()
            .localeCompare(b.stateFullName.toLowerCase()) ||
          b.deathIncrease - a.deathIncrease
        );
      });
      
        let stateChecker = "";
        let worstDaysByState = []
        CovStateData.forEach((data,i) => {
        if(i === 0){stateChecker = data.state; return worstDaysByState.push(data)}
        else if (data.state !== stateChecker){ stateChecker = data.state; return worstDaysByState.push(data)};
      });
      console.log("viewHandler", worstDaysByState);
      return worstDaysByState;
    } else {
      return data;
    }
  };

  render() {
    const {searchField,slider } = this.state;
    const CovStateData = this.props.covStateData;
    const CovUsData = this.props.covUsData;
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
    let radioFilters = ["Death Increase Daily - High To Low","Death Increase Daily - Low To High",
    "Positive Increase - High To Low","Positive Increase - Low To High", "Date - Oldest To Recent","Date - Recent To Oldest"]
    return (
      <main className="dataPage">
        <div className = "slider-filters">
        <Slider
          boolean={this.slideHandler}
          usStateBoolean={slider}
        />
        <div className="infoSection">
          <div className="data-radios" onChange={this.filterSortView}>
          {radioFilters.map((filter)=>{
            return(
              <div className = 'radios'>
            <input
              type="radio"
              name="sort-filter"
              value={filter}
            />
            <label htmlFor={filter}>
              {filter}
            </label>
            </div>
            )
          })}
            {!slider ? (
              <div className = 'radios'>
                <input
                  type="radio"
                  name="sort-filter"
                  value="Worst Day - By State"
                />
                <label htmlFor="Worst Day - By State">
                  Worst Day - By State
                </label>
              </div>
            ) : null}
          </div>
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
              <CovidUsDataComplete data={this.viewHandler(CovUsData)} />
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default DataPage;
