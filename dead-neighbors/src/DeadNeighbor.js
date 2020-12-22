import React from 'react';

class DeadNeighbor extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

componentDidMount(){
this.myInterval = setTimeout(()=>{this.props.deadNeighbor(false)},8000)}

render(){
    return(
        
        <h1>Your Neighbor Has Died</h1>
    )
}
}

export default DeadNeighbor;