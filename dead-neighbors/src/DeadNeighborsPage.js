import React from 'react';
import CountDown from './Timer';

class DeadNeighborsPage extends React.Component{
    constructor(props) {
        super(props) 
            this.state = {
                CovUSdata: props.usDataAll,
                CovidDeathsToday:props.usData,
                deadPerson: 0,
            }
      }
      deadTrue(boolean){
        if(boolean){
            this.setState({deadPerson:this.state.deadPerson+1})
            this.props.dead(this.state.deadPerson);
        }
      }

    render(){
        console.log('DeadNeighborsPage',this.state.deadPerson);
        const {CovidDeathsToday,CovUSdata} = this.state;
        return(
            <CountDown 
            usData ={CovidDeathsToday} 
            usDataAll = {CovUSdata}
            dead = {this.deadTrue.bind(this)}/*Sends true to App component*/
            />
        )
    }

}
export default DeadNeighborsPage;