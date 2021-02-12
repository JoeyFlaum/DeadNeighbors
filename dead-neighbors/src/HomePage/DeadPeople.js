import React from "react";
import DeadPerson from "./DeadPerson";

class DeadPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flyBy: false,
    };
  }
  componentDidMount(){
    this.setState({ flyBy: true });
    this.myTimeout = setTimeout(() => {
      this.setState({ flyBy: false });
    }, 1);
  }
  componentWillUnmount() {
    clearInterval(this.myTimeout);
    console.log("unmount");
  }
  render() {
    console.log("render");
    return (
      <div
        className={this.state.flyBy ? "dead-card fly-by" : "dead-card hidden"}
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
