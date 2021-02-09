import React from 'react';

class DeadNeighbor extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

componentDidMount(){
this.myTimeout = setTimeout(()=>{this.props.deadNeighbor(false)},8000)}/*send state to Timer component through props, renders for 8 seconds when timer hits 0*/


render(){
    return(
        
        <h2>Your Neighbor Has Died</h2>
    )
}
}

export default DeadNeighbor;