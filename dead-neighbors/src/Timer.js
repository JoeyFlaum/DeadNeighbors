import React from "react";
import DeadNeighbor from "./DeadNeighbor";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deathCounter24Hour: 0,
      counterAt0: true,
      deadNeighb: false,
    };
  }
  /*Take in API data, Create 24 hour period divided by total deaths for the most recent day*/
  componentDidMount() {
    this.myInterval = setInterval(() => {
      /*runs every 100 milliseconds*/
      if (
        this.state.deathCounter24Hour === 0 &&
        this.state.counterAt0 === true
      ) {
        this.setState({
          counterAt0: false /*set to false to go to else if statement*/,
          deathCounter24Hour: Math.floor(
            /*24 hr*/ (1000 * 60 * 60 * 24) / this.props.usData /*deaths today*/
          ) /*time between deaths for the day*/,
        });
      } else if (
        /*reset timer when it hits 0*/
        this.state.deathCounter24Hour <= 0 &&
        this.state.counterAt0 === false
      ) {
        this.setState({
          deathCounter24Hour: 0,
          counterAt0: true,
        }); /* if statement becomes true */
        this.deadNeighbor(true); /*Sends true to DeadNeighborPage component*/
      } else {
        /*timer countdown interval*/
        this.setState((prevState) => ({
          deathCounter24Hour:
            prevState.deathCounter24Hour - 110 /* shows deciseconds*/,
        }));
      }
    }, 100);
  }
  /*clears each interval to prevent memory leaks*/
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  deadNeighbor = (boolean) => {
    if (boolean) {
      this.setState({ deadNeighb: true });
      this.props.dead(this.state.deadNeighb);
    } else {
      this.setState({ deadNeighb: false });
    }
  };
  render() {
    const { deathCounter24Hour } = this.state;
    const hours = Math.floor(
      (deathCounter24Hour % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor(
      (deathCounter24Hour % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secs = Math.floor((
      deathCounter24Hour % (1000 * 60)) / 1000
      );
    const deci = Math.floor(
      (deathCounter24Hour / 10) % 100);
    return (
      <div className="timer">
        {this.state.deadNeighb === true ? (
          <DeadNeighbor
            deadNeighbor={this.deadNeighbor}
          /> /*renders for 8 seconds when timer hits 0*/
        ) : (
          <h2>Your Neighbor Will Die In</h2>
        )}
        <h2>
          {/*display timer*/
            `${("0" + hours).slice(-2)} :
             ${("0" + mins).slice(-2)} :
             ${("0" + secs).slice(-2)}.${("0" + deci).slice(-1)}`
          }
        </h2>
      </div>
    );
  }
}
export default CountDown;
