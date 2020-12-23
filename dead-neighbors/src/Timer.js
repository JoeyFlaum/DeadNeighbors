import React from 'react';
import DeadNeighbor from './DeadNeighbor'

class CountDown extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            usData:this.props.usData,
            deathCounter24Hour: 0,
            counterAt0:true,
            deadNeighb:false
        }
    } 
    componentDidMount(){
        this.myInterval = setInterval(()=>{
        if(this.state.deathCounter24Hour === 0 && this.state.counterAt0 === true){
            console.log('if')
            this.setState({counterAt0 : false})
            const usDeathsToday = this.state.usData;
            const endDate = new Date(this.props.usDataAll[0].dateChecked).getTime();
            const beginDate = (new Date(endDate).getTime())-(1000 * 60 * 60 * 24);
            const day24Hour = (endDate-beginDate)
            this.setState({deathCounter24Hour : Math.floor(day24Hour/usDeathsToday)})
            console.log('deaths',this.state.deathCounter24Hour);
            console.log('true/false',this.state.counterAt0);
        }
        else if(this.state.deathCounter24Hour <= 0 && this.state.counterAt0 === false){
            console.log('if2')
            this.setState({deathCounter24Hour: 0,counterAt0:true})
            this.deadNeighbor(true);
             
        }
        else{
            console.log('else')
            console.log('death counter',this.state.deathCounter24Hour)
            console.log('counterAt0',this.state.counterAt0)
            this.setState(prevState =>({
                    deathCounter24Hour : (prevState.deathCounter24Hour -110)
                }))}},100)  
        }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    deadNeighbor= (boolean)=>{
        if(boolean){
          this.setState({deadNeighb: true})
        }
        else{
          this.setState({deadNeighb: false})
        }
      }
    render(){
        console.log('render',this.props.deadNeighb)
        const {deathCounter24Hour} = this.state;
        const hours = Math.floor((deathCounter24Hour % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((deathCounter24Hour % (1000 * 60 *60)) / (1000*60));
        const secs = Math.floor(deathCounter24Hour % (1000 * 60)/1000);
        const centi = Math.floor(((deathCounter24Hour/10) % 100));
        return (
            <div>
                {this.state.deadNeighb===true?<DeadNeighbor  deadNeighbor ={this.deadNeighbor}/>:<h1>Your Neighbor Will Die In</h1>}
                <h1>
                    {`${("0"+hours).slice(-2)} :
                    ${("0"+mins).slice(-2)} :
                    ${("0"+secs).slice(-2)}.${("0"+centi).slice(-1)}`}
                </h1>
            </div>
        );
    }

}
export default CountDown;