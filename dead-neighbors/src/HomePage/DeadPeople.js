import React from "react";
import DeadPerson from "./DeadPerson";

class DeadPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadPersons: [],
      aliveSVGFillStroke: ["#e3d6b1", "#9f6255"],
      deadSVGFillStroke: ["#FF0000", "#9f6255"],
    };
  }
  componentDidMount = () => {
    const deadPersonCount = this.props.deadPersonCount;
    let deadSinceVisit =
      (deadPersonCount % 33);/*Resets the color of the DeadPerson SVGs when value is 0*/
     let people = [];
    for (let i = 1; i <= 32; i++) {/*create 32 SVG "people"*/
      people.push(
        <div key={i}>
          <DeadPerson
            key={i}
            fillStroke={
              i - deadSinceVisit > 0/*set color of SVG*/
                ? this.state.aliveSVGFillStroke
                : this.state.deadSVGFillStroke
            }
          />
        </div>
      );
    }
    this.setState({ deadPersons: people });
    
  };
  render() {
    return (
      <>
      <p>{this.props.deadPersonCount} Dead Since Your Visit</p>
      <div className="people">
        {this.state.deadPersons.map((people) => {/*Map 32 SVG images with correct coloring*/
          return people;
        })}
      </div>
      </>
    );
  }
}

export default DeadPeople;
