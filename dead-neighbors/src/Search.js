import React from 'react';
import stateList from './StateList'

class SearchFeature extends React.Component{
  constructor(props){
    super(props)
    this.state ={
    inputField:"",
    suggestions:false,
    mouseOverSuggestions:false
    }
  }
    /*handle button click to populate input field of search*/
  buttonHandler = (event)=>{
    console.log('button',event)
    this.setState({
      inputField : "",
      suggestions:false,
      mouseOverSuggestions : false})
  }
  /*Mouse over if statement and suggestionFocusHandler show or hide suggestions for search*/
  mouseOverSuggestions=(event)=>{
    let eType = event.type; 
    if(eType === 'mouseover')
      {this.setState({mouseOverSuggestions:true})}
    else if(eType === 'mouseleave')
      {this.setState({mouseOverSuggestions:false})}
    console.log('mouse event',event)
  }
  /*handles events from input/button/li to show or hide suggestions*/
  suggestionFocusHandler=(event)=>{
    const {mouseOverSuggestions}=this.state;
    switch(event.type){
      case('focus'):this.setState({suggestions:true});console.log('focus',event);break;
      case('change'):this.setState({suggestions:true});console.log('change',event);break;
      case('click'):this.setState({suggestions:true});console.log('click',event);break;
      case('blur'):
        if(mouseOverSuggestions)
          {this.setState({suggestions:true});console.log('Show, MousoverTrue');break;}
        else
          {this.setState({suggestions:false});console.log('blur, MouseoverFalse');break;}
      default: console.log('Switch default');break;
    }
  }
  onSearchChange = (event) => {
    this.setState({inputField: event.target.value})
  }

  render(){
  console.log(this.state.suggestions)
  console.log(this.state.mouseOverSuggestions)

  const {inputField} =this.state;
  const filteredStates = stateList.filter((stateData)=>{
    return (stateData.stateFullName.toLowerCase().includes(inputField.toLowerCase())||
    stateData.stateAbbreviation.toLowerCase().includes(inputField.toLowerCase()))
    })
    return (
    <>
    <h2 className = 'stateSearch'>State Search</h2>
    <form className = 'searchWrapper' onSubmit = {(e)=>e.preventDefault()}>      <input
        placeholder='Enter State or Abbreviation'
        onKeyPress ={this.props.onEnter}
        onChange = {e=>{this.onSearchChange(e);this.suggestionFocusHandler(e)}}
        value={this.state.inputField}
        onClick={this.suggestionFocusHandler}
        onBlur={this.suggestionFocusHandler}
        />
      <div className = "searchfield">
      <ul className = 'navigation'>
      {this.state.suggestions === true?
        filteredStates.map((state,i)=>{
        return(
          <li key = {i}
              onMouseOver={this.mouseOverSuggestions}
              onMouseLeave={this.mouseOverSuggestions}
              onBlur = {this.suggestionFocusHandler}
          >     
            <button
                  key = {i}
                  ref = {r=>this.myButton = r} 
                  className = "suggestion"
                  onClick = {(e)=>{this.buttonHandler(e);this.props.onEnter(e)}}
                  onBlur = {this.suggestionFocusHandler}
                  value = {(filteredStates[i].stateFullName)}
              >{filteredStates[i].stateFullName}
            </button>
          </li>) 
        })
      :
        null 
      }
      </ul>
      </div>
    </form>
    </>
   )
}
}

export default SearchFeature;

