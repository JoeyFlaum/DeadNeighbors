import React from 'react';

class DeadNeighbor extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

componentDidMount(){
this.myInterval = setTimeout(()=>{this.props.deadNeighbor(false)},8000)}/*send state to Timer component through props*/

render(){
    return(
        
        <h2>Your Neighbor Has Died</h2>
    )
}
}

export default DeadNeighbor;