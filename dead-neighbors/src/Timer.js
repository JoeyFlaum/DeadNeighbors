import React from 'react';

class CountDown extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            usData:this.props.usData,
            deathCounter24Hour: 1,
            counterAt0: true
    }
    } 
    render(){
        console.log('render')
        const {deathCounter24Hour} = this.state;
        const days = Math.floor(deathCounter24Hour / (1000 * 60 * 60 * 24));
        const hours = Math.floor((deathCounter24Hour % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((deathCounter24Hour % (1000 * 60 *60)) / (1000*60));
        const secs = Math.floor(deathCounter24Hour % (1000 * 60)/1000);
        const centi = Math.floor(((deathCounter24Hour/10) % 100));
        return (
            <div>
                <h1>
                    {`${("0"+days).slice(-2)} day(s)
                    ${("0"+hours).slice(-2)} :
                    ${("0"+mins).slice(-2)} :
                    ${("0"+secs).slice(-2)}.${("0"+centi).slice(-1)}`}
                </h1>
            </div>
        );
    }
    componentDidMount(){
        this.myInterval = setInterval(()=>{
        if(this.state.deathCounter24Hour === 0 || this.state.counterAt0 === true){
            console.log('if')
            this.setState({counterAt0 : false})
            const usDeathsToday = this.state.usData;
            const endDate = new Date("2020-12-17T24:00:00Z").getTime();
            const beginDate = (new Date(endDate).getTime())-(1000 * 60 * 60 * 24);
            const day24Hour = (endDate-beginDate)
            this.setState({deathCounter24Hour : Math.floor(day24Hour/usDeathsToday)})
            console.log('deaths',this.state.deathCounter24Hour);
            console.log('deaths',this.state.counterAt0);
        }
        else if(this.state.deathCounter24Hour <= 0 && this.state.counterAt0 === false){
            console.log('if2')
            this.setState({deathCounter24Hour: 0,counterAt0:true})
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
}
export default CountDown;