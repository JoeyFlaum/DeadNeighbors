import React from 'react';

class CountDown extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            days:'',
            hours:'',
            mins:'',
            secs:'',
            milli:''
        }
    } 

    setTimeLeft =(t)=>{
        this.setState({days: Math.floor(t / (1000 * 60 * 60 * 24))});
        this.setState({hours: Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))});
        this.setState({mins: Math.floor((t % (1000 * 60 *60)) / (1000*60))});
        this.setState({secs: Math.floor(t % (1000 * 60)/1000)});
        this.setState({milli: Math.floor((t % 100))});
    }

    render(){
    const endDate = new Date("january 1, 2021 00:00:00").getTime(); 
    setInterval(()=>{
            let now = new Date().getTime();
            let timeLeft = endDate - now;
            this.setTimeLeft(timeLeft);
        },100);
    
    const {days, hours, mins, secs, milli} = this.state
    return (
        <div>
            <h1>
                {`${("0"+days).slice(-2)} day(s)
                 ${("0"+hours).slice(-2)} :
                 ${("0"+mins).slice(-2)} :
                 ${("0"+secs).slice(-2)}.${("0"+milli).slice(-2)}`}
            </h1>
        </div>
    );
}
}
export default CountDown;