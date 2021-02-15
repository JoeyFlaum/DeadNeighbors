import React from "react";
import stateList from "./StateList";

class SearchFeature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: "",
      suggestions: false,
      mouseOverSuggestions: false,
    };
  }
  /*handle button click to populate input field of search, suggestions false*/
  buttonHandler = (event) => {
    this.setState({
      inputField: "",
      suggestions: false,
      mouseOverSuggestions: false,
    });
  };
  /*Mouse over if statement and suggestionFocusHandler show or hide suggestions for search*/
  mouseOverSuggestions = (event) => {
    let eType = event.type;
    if (eType === "mouseover") {
      this.setState({ mouseOverSuggestions: true });
    } else if (eType === "mouseleave") {
      this.setState({ mouseOverSuggestions: false });
    }
  };
  /*handles events from input/button/li to show or hide suggestions*/
  suggestionFocusHandler = (event) => {
    const { mouseOverSuggestions } = this.state;
    switch (event.type) {
      case "focus":
        this.setState({ suggestions: true });
        break;
      case "change":
        this.setState({ suggestions: true });
        break;
      case "click":
        this.setState({ suggestions: true });
        break;
      case "blur":
        if (mouseOverSuggestions) {
          this.setState({ suggestions: true });
          break;
        } else {
          this.setState({ suggestions: false });
          break;
        }
      default:
        break;
    }
  };
  onSearchChange = (event) => {/* changes as values are entered into search input*/
    this.setState({ inputField: event.target.value });
  };

  render() {
    const { inputField } = this.state;
    const filteredStates = stateList.filter((stateData) => {/* stateList has state full name and abbreviation, returns match to either*/
      return (
        stateData.stateFullName
          .toLowerCase()
          .includes(inputField.toLowerCase()) ||
        stateData.stateAbbreviation
          .toLowerCase()
          .includes(inputField.toLowerCase())
      );
    });
    return (
      <div className ='stateSearch'>
       
        <h2>Search By State</h2>
        <form className="searchWrapper" onSubmit={(e) => e.preventDefault()}>
          {" "}
          <input/* search input for state search*/
            placeholder="Enter State or Abbreviation"
            onKeyPress={this.props.onEnter}/* sends value to searchHandler on DataPage */
            onChange={(e) => {
              this.onSearchChange(e);/*show */
              this.suggestionFocusHandler(e);/* suggestions shown is true */
            }}
            value={this.state.inputField} /* sets value of search input */
            onClick={this.suggestionFocusHandler} /* suggestions shown is true */
            onBlur={this.suggestionFocusHandler} /* suggestions shown is true */
          />
          <div className="searchfield">
            <ul className="navigation">
              {this.state.suggestions === true
                ? filteredStates.map((state, i) => {
                    return (
                      <li
                        key={i}
                        onMouseOver={this.mouseOverSuggestions}/* true*/
                        onMouseLeave={this.mouseOverSuggestions}/* false*/
                        onBlur={this.suggestionFocusHandler}/* suggestions shown is true or false depending on mouse over suggestions */
                      >
                        <button
                          key={i}
                          className="suggestion"
                          onClick={(e) => {
                            this.buttonHandler(e);/* suggestions becomes false*/
                            this.props.onEnter(e);/* send value of button to dataPage function */
                          }}
                          onBlur={this.suggestionFocusHandler}/* set blur to true/false */
                          value={filteredStates[i].stateFullName} /*state results changes as search changes */
                        >
                          {filteredStates[i].stateFullName + ", " + filteredStates[i].stateAbbreviation   /* display state name and abbreviation on button */}
                        </button>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </form>
        </div>
    );
  }
}

export default SearchFeature;
