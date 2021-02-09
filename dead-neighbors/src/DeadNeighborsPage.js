import React from 'react';
import CountDown from './Timer';

class DeadNeighborsPage extends React.Component{
    constructor(props) {
        super(props) 
            this.state = {
                deadPerson: 0
            }
            this.deadTrue = this.deadTrue.bind(this);
      }
      deadTrue(boolean){
        if(boolean){
            this.setState({deadPerson:this.state.deadPerson+1})/*dead person count from timer hitting 0*/
            this.props.dead(this.state.deadPerson); /*send dead person count to app.js */
        }
      }

    render(){
        return(
            <CountDown 
            usData ={this.props.usData}
            dead = {this.deadTrue}/*Sends true to when timer hits 0 to deatTrue function*/
            />
        )
    }

}
export default DeadNeighborsPage;