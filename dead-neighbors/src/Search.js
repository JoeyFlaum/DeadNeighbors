import React from 'react';
import stateList from './StateList'

class SearchFeature extends React.Component{
  constructor(){
    super()
    this.state ={
    inputField:"",
    suggestions:false
    }
  }
    /*handle button click to populate input field of search*/
    buttonHandler = (event)=>{
    console.log('button',event.target.value)
    this.setState({inputField : event.target.value,suggestions:false})
  }
    suggestionFocusHandler=(event)=>{
      console.log(event)
       if(event.type==='focus'||'change'||'click')
        {console.log(event)
        this.setState({suggestions:true});}
      else if(event.type==='blur')
      {this.setState({suggestions:false});}
    }
    onSearchChange = (event) => {
    this.setState({suggestedState: event.target.value})
    console.log(this.suggestedState)
  }

   render(){
    const {inputField} =this.state;
    const filteredStates = stateList.filter((stateData)=>{
      return (stateData.stateFullName.toLowerCase().includes(inputField.toLowerCase())||
      stateData.stateAbbreviation.toLowerCase().includes(inputField.toLowerCase()))
      })
     return (
     <div className = "formwrapper">  
     <form onSubmit = {(e)=>e.preventDefault()}>
     
       <input
          placeholder='Enter State or Abbreviation'
          onKeyPress ={this.props.onEnter}
          onChange = {e=>{this.buttonHandler(e);this.suggestionFocusHandler(e)}}
          value={this.state.inputField}
          onClick={this.suggestionFocusHandler}
          /> 
       <div className = "searchfield">
       <ul>
        {this.state.suggestions === true?
          filteredStates.map((state,i)=>{
          return(
            <li key = {i}>     
              <button
                  key = {i} 
                  className = "suggestion"
                  onClick = {this.buttonHandler}
                  onBlur = {this.suggestionFocusHandler}
                  value = {(filteredStates[i].stateFullName)}
              >{filteredStates[i].stateFullName}</button>
            </li>) 
          })
        :
          null 
        }
        </ul>
     </div>
     </form>

    </div>
   )
 }
}

export default SearchFeature;

