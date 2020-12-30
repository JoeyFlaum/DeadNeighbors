import React from 'react';
import DeadPerson from './DeadPerson'

class DeadPeople extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            deadPersons:[],
            aliveSVGFillStroke:['#e3d6b1','#9f6255'],
            deadSVGFillStroke:['#FF0000','#9f6255'],
            deadSinceVisit:20
        }
    }
    componentDidMount = ()=>{
        let people = [];
        for(let i = 1; i<=100; i++){
            people.push(
                <div key = {i} className= {`person${i}`}>
                <DeadPerson 
                    key = {i}
                    className = {`deadPerson${i}`}
                    fillStroke={i - this.state.deadSinceVisit > 0 ? this.state.aliveSVGFillStroke : this.state.deadSVGFillStroke}
                />
                </div>
            )
        }
        this.setState({deadPersons: people})
    }
    render(){
    return(
        <div style ={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
            {this.state.deadPersons.map((people)=>{
                console.log(people)
                return(people);
            })}
        </div>
    )}
}

export default DeadPeople;