import React from "react";
import CovidStateData from "./CovidStateData";
import SearchFeature from "./Search";
import CovidUsDataComplete from "./CovidUsDataComplete";
import Slider from "./Slider";
import DeadPeople from "../HomePage/DeadPeople";

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
  }
  scrollToTop =() =>{window.scrollTo(0,0);}
  /*handle enter key and button click for state search*/

  searchHandler = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      this.setState({ searchField: event.target.value });
    }
  };
  slideHandler = () => {/* sets true/false US or State display */
    this.setState({ slider: !this.state.slider });

  };
  filterView = () => {/* sets true/false for filters visible */
    this.setState({ showFilter: !this.state.showFilter });
    this.scrollToTop();
  };
  menuView = () =>{  /* sets true/false for menu open/close */
    this.setState({ showMenu: !this.state.showMenu });
  }
  /*set state of radio input choice*/
  filterSortView = (event) => {
    this.setState({ dataView: event.target.value});/*click event value from sorting options */
    this.menuView();/*closes menu*/
    
  };

  /*filter and sort state/us data*/
  viewHandler = (data) => {
    this.scrollToTop();
    const { dataView } = this.state;
    const CovStateData = this.props.covStateData;
    const CovidStateData = [...CovStateData];/*spread operator to copy props to new array */
    const dataArray = [...data];/*spread operator to copy props to new array */
    /*sorting matches if / else if statements strings */
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
    } else if (dataView === "Worst Day - By State") {/*does not take in data parameter, uses the spread operater arrays*/
      /*sort objects alphabetical order by state and then by deaths*/
      CovidStateData.sort((a, b) => {
        return (
          a.stateFullName
            .toLowerCase()
            .localeCompare(b.stateFullName.toLowerCase()) ||
          b.deathIncrease - a.deathIncrease
        );
      });
      let stateChecker = "";/*used to see if next object has the same state as the current object */
      let worstDaysByState = [];/* 1st result of each state is pushed to worstDaysByState array */
      CovidStateData.forEach((data, i) => {
        if (i === 0) {/*first state result is the first worst day after sorting operations and pushed to worstDaysByState variable */
          stateChecker = data.state;
          return worstDaysByState.push(data);
        } else if (data.state !== stateChecker) {/* if object state is different, object is pushed to worstDaysByState variable */
          stateChecker = data.state;
          return worstDaysByState.push(data);
        }
      });
      worstDaysByState.sort((a, b) => b.deathIncrease - a.deathIncrease);/*sorts worst days once forEach Loop is complete */
      return worstDaysByState;
    } else {/* if no match returns original data */
      return dataArray;
    }
  };

  render() {
    const { searchField, slider, showFilter,showMenu } = this.state;
    const CovStateData = this.props.covStateData;
    const CovUsData = this.props.covUsData;
    let filteredStates = [];/* searchfield value filters the data, comes from SearchFeature */
    filteredStates = CovStateData.filter((stateData) => {
      return stateData.stateFullName
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    let unfilteredStates = [];/* searchField is blank and the most recent state data for each state is returned */
    unfilteredStates = CovStateData.slice(0, 56).filter((stateData) => {
      return stateData.stateFullName
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    let radioFilters = [ /* set value of radio button filters */
      "Death Increase Daily - High To Low",
      "Death Increase Daily - Low To High",
      "Positive Increase - High To Low",
      "Positive Increase - Low To High",
      "Date - Oldest To Recent",
      "Date - Recent To Oldest",
    ];
    let filterArrow = (/* create arrows for menu up/down visualization*/
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
      <DeadPeople /* dead person count display */
                deadPersonCount={this.props.deadPerson}
                key={
                  this.props.deadPerson
                } /*key change forces render(updated props are sent)*//>
     
      <div className="menu-wrapper">
          <div className = {!this.state.showMenu?"data-menu up":"data-menu down"} onClick= {this.menuView}> {/* show/ hide menu tab */}
            <div className={!this.state.showMenu? "arrow up one" : "arrow down one"} id = "menu">{filterArrow}</div> {/*arrow up /down*/ }
            <div>Menu</div> 
            <div className={!this.state.showMenu ? "arrow up two" : "arrow down two"} id = "menu">{filterArrow}</div> {/*arrow up /down*/ }
          </div>
        <div className={!this.state.showMenu? "slider-filters up":"slider-filters down"}> {/* slider/sorting options menu */}
          <div className="slider-filter-wrapper">
            <Slider boolean={this.slideHandler} usStateBoolean={slider} />{/* slider to choose US or State Info display */}
            <div className={!showFilter?"filter-sort up":"filter-sort down"} onClick={this.filterView}>{/* show/hide sorting tab */}
              <div className={!showFilter ? "arrow up one" : "arrow down one"} id = "sort">{filterArrow}</div>{/*arrow up /down*/ }
              <div>Sorting Options</div>
              <div className={!showFilter ? "arrow up two" : "arrow down two"} id = "sort">{filterArrow}</div>{/*arrow up /down*/ }
            </div>
          </div>
          <div
            className={/*filters */
              !showFilter ? "data-radios up" : "data-radios down"
            }
            onChange={this.filterSortView} /* chooses filter and closes menu */
          >
            {radioFilters.map((filter, i) => {/* map filters to sorting optionsmenu */
              return (
                <div className="radios" key = {i}>
                <label>
                  <input type="radio" name="sort-filter" value={filter}/>
                  <span>{filter}</span>
                </label>
                </div>
              );
            })}
            {!slider ? (/* no map due to state view only */
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
          {!slider ? (/* state/us view */
            <>
             {this.state.dataView !== "Worst Day - By State" ? <SearchFeature /* search for individual state on state data view */
                className="searchfeature"
                onEnter={this.searchHandler}
                menuClose = {showMenu!==false?this.menuView:null}
              />:<div></div>
             }
              <div className="stateStats">
                <CovidStateData /*renders filtered or unfiltered state data. Filtered by searchfield value and sorts with viewHandler*/
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
              <CovidUsDataComplete data={this.viewHandler(CovUsData)} /* renders usData and sorts with viewHandler */ />
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default DataPage;
