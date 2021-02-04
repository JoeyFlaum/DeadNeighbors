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
  /*handle button click to populate input field of search*/
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
  onSearchChange = (event) => {
    this.setState({ inputField: event.target.value });
  };

  render() {
    const { inputField } = this.state;
    const filteredStates = stateList.filter((stateData) => {
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
          <input
            placeholder="Enter State or Abbreviation"
            onKeyPress={this.props.onEnter}
            onChange={(e) => {
              this.onSearchChange(e);
              this.suggestionFocusHandler(e);
            }}
            value={this.state.inputField}
            onClick={this.suggestionFocusHandler}
            onBlur={this.suggestionFocusHandler}
          />
          <div className="searchfield">
            <ul className="navigation">
              {this.state.suggestions === true
                ? filteredStates.map((state, i) => {
                    return (
                      <li
                        key={i}
                        onMouseOver={this.mouseOverSuggestions}
                        onMouseLeave={this.mouseOverSuggestions}
                        onBlur={this.suggestionFocusHandler}
                      >
                        <button
                          key={i}
                          ref={(r) => (this.myButton = r)}
                          className="suggestion"
                          onClick={(e) => {
                            this.buttonHandler(e);
                            this.props.onEnter(e);
                          }}
                          onBlur={this.suggestionFocusHandler}
                          value={filteredStates[i].stateFullName}
                        >
                          {filteredStates[i].stateFullName + ", " + filteredStates[i].stateAbbreviation   }
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
