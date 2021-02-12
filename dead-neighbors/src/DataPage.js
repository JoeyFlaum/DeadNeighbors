import React from "react";
import CovidStateData from "./CovidStateData";
import SearchFeature from "./Search";
import CovidUsDataComplete from "./CovidUsDataComplete";
import Slider from "./Slider";
import DeadPeople from "./HomePage/DeadPeople";

class DataPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      slider: true,
      dataView: "",
      showFilter: false,
      showMenu:false,
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
  filterView = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };
  menuView = () =>{
    this.setState({ showMenu: !this.state.showMenu });
    
  }
  /*set state of radio input choice*/
  filterSortView = (event) => {
    this.setState({ dataView: event.target.value});
    this.menuView();
  };

  /*filter and sort state/us data*/
  viewHandler = (data) => {
    const { dataView } = this.state;
    const CovStateData = this.props.covStateData;
    const CovidStateData = [...CovStateData];
    const dataArray = [...data];
    if (dataView === "Death Increase Daily - High To Low") {
      dataArray.sort(
        (a, b) => b.deathIncrease - a.deathIncrease || b.date - a.date
      );
      return dataArray;
    } else if (dataView === "Death Increase Daily - Low To High") {
      dataArray.sort(
        (a, b) => a.deathIncrease - b.deathIncrease || a.date - b.date
      );
      return dataArray;
    } else if (dataView === "Positive Increase - High To Low") {
      dataArray.sort(
        (a, b) => b.positiveIncrease - a.positiveIncrease || b.date - a.date
      );
      return dataArray;
    } else if (dataView === "Positive Increase - Low To High") {
      dataArray.sort(
        (a, b) => a.positiveIncrease - b.positiveIncrease || a.date - b.date
      );
      return dataArray;
    } else if (dataView === "Date - Oldest To Recent") {
      dataArray.sort((a, b) => a.date - b.date);
      return dataArray;
    } else if (dataView === "Date - Recent To Oldest") {
      dataArray.sort((a, b) => b.date - a.date);
      return dataArray;
    } else if (dataView === "Worst Day - By State") {
      /*sort objects alphabetical order by state and then by deaths*/
      CovidStateData.sort((a, b) => {
        return (
          a.stateFullName
            .toLowerCase()
            .localeCompare(b.stateFullName.toLowerCase()) ||
          b.deathIncrease - a.deathIncrease
        );
      });

      let stateChecker = "";
      let worstDaysByState = [];
      CovidStateData.forEach((data, i) => {
        if (i === 0) {
          stateChecker = data.state;
          return worstDaysByState.push(data);
        } else if (data.state !== stateChecker) {
          stateChecker = data.state;
          return worstDaysByState.push(data);
        }
      });
      worstDaysByState.sort((a, b) => b.deathIncrease - a.deathIncrease);
      console.log("viewHandler", worstDaysByState);
      return worstDaysByState;
    } else {
      return dataArray;
    }
  };

  render() {
    const { searchField, slider } = this.state;
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
    let radioFilters = [
      "Death Increase Daily - High To Low",
      "Death Increase Daily - Low To High",
      "Positive Increase - High To Low",
      "Positive Increase - Low To High",
      "Date - Oldest To Recent",
      "Date - Recent To Oldest",
    ];
    let filterArrow = (
      <svg
        
        viewBox="10 45 100 120"
        height="20px"
        width="35px"
      >
        <polyline
          points="0 60 60 145 120 60"
        />
      </svg>
    );
    return (
      <main className="dataPage">
      <DeadPeople 
                deadPersonCount={this.props.deadPerson}
                key={
                  this.props.deadPerson
                } /*key change forces render(updated props are sent)*//>
     
      <div className="menu-wrapper">
          <div className = {!this.state.showMenu?"data-menu up":"data-menu down"} onClick= {this.menuView}>
          <div className={!this.state.showMenu? "arrow up one" : "arrow down one"} id = "menu">{filterArrow}</div>
           <div>Menu</div> 
           <div className={!this.state.showMenu ? "arrow up two" : "arrow down two"} id = "menu">{filterArrow}</div>
           </div>
        <div className={!this.state.showMenu? "slider-filters up":"slider-filters down"}>
          <div className="slider-filter-wrapper">
            <Slider boolean={this.slideHandler} usStateBoolean={slider} />
            <div className={!this.state.showFilter?"filter-sort up":"filter-sort down"} onClick={this.filterView}>
            <div className={!this.state.showFilter ? "arrow up one" : "arrow down one"} id = "sort">{filterArrow}</div>
              <div>Sorting Options</div>
              <div className={!this.state.showFilter ? "arrow up two" : "arrow down two"} id = "sort">{filterArrow}</div>
            </div>
          </div>
          <div
            className={
              !this.state.showFilter ? "data-radios up" : "data-radios down"
            }
            onChange={this.filterSortView} onClick={(e)=>console.log(e)}
          >
            {radioFilters.map((filter) => {
              return (
                <div className="radios">
                <label>
                  <input type="radio" name="sort-filter" value={filter}/>
                  <span>{filter}</span>
                </label>
                </div>
              );
            })}
            {!slider ? (
              <div className="radios">
              <label>
                <input
                  type="radio"
                  name="sort-filter"
                  value="Worst Day - By State"
                />
                  Worst Day - By State
                </label>
              </div>
            ) : null}
          </div>
        </div>
        </div>
        <div className="infoSection">
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
