import React from "react";
import DeadPerson from "./DeadPerson";

class DeadPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardVisible: false,
    };
    this.hideShowCard = this.hideShowCard.bind(this)
  }
  hideShowCard=()=>{
    this.setState({ cardVisible: !this.state.cardVisible });
  }
  render() {
    console.log(this.state.cardVisible)
    console.log("render");
    return (
      <div
        className={this.state.cardVisible ? "dead-card visible" : "dead-card hidden"} onClick={this.hideShowCard}
      >
        <p>
          {this.props.deadPersonCount} Dead <span> Since Your Visit</span>
        </p>
        <div className="people">
          <DeadPerson deadPersonCount={this.props.deadPersonCount} flyBy = {this.flyByTimeout} />
        </div>
      </div>
    );
  }
}

export default DeadPeople;
