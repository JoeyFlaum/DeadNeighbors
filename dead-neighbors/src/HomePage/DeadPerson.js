import React from 'react';

class DeadPerson extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          aliveSVGFillStroke: ["#e3d6b1", "#9f6255"],
          deadSVGFillStroke: ["#FF0000", "#9f6255"],
        };
      }
      render(){
        const{aliveSVGFillStroke,deadSVGFillStroke}=this.state;
        const deadPersonCount = this.props.deadPersonCount;
        let deadSinceVisit = (deadPersonCount % 33);/*Resets the color of the DeadPerson SVGs when value is 0*/
        let people = [];
        for (let i = 1; i <= 32; i++) {/*create 32 SVG "people"*/
        if (i - deadSinceVisit > 0){
        people.push(
            <div className = 'person' key={i}>
            <svg viewBox = '0 10 100 100'>
            <rect x='35' y='70' rx='10' ry='10' width='30' height='50' 
                style={{fill:aliveSVGFillStroke[0],stroke:aliveSVGFillStroke[1],strokewidth:'5'}} />{/*takes in props from for loop and determines color*/}
            <circle cx = '50'  cy = '50' r='25'
                style={{fill:aliveSVGFillStroke[0],stroke:aliveSVGFillStroke[1],strokewidth:'5'}} />{/*takes in props from for loop and determines color*/}
            </svg>
            </div>
        )}
        else {
        people.push(
            <div className = 'person'  key={i}>
            <svg viewBox = '0 10 100 100'>
            <rect x='35' y='70' rx='10' ry='10' width='30' height='50' 
                style={{fill:deadSVGFillStroke[0],stroke:deadSVGFillStroke[1],strokewidth:'5'}} />{/*takes in props from for loop and determines color*/}
            <circle cx = '50'  cy = '50' r='25'
                style={{fill:deadSVGFillStroke[0],stroke:deadSVGFillStroke[1],strokewidth:'5'}} />{/*takes in props from for loop and determines color*/}
            </svg>
            </div>
        )}
        }
    return(
    <>
        {people.map((person)=>{
            return person
        })}
    </>
    )
    }
    
}

export default DeadPerson;