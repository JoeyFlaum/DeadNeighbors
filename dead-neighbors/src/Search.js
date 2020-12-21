import React from 'react';
import stateList from './StateList'

class SearchFeature extends React.Component{
  constructor(){
    super()
    this.state ={
    suggestedState:'',
    inputField:""
    }
  }
    /*handle button click to populate input field of search*/
    buttonHandler = (event)=>{
    console.log('button',event.target.value)
    this.setState({inputField : event.target.value})
  }
    onSearchChange = (event) => {
    this.setState({suggestedState: event.target.value})
    console.log(this.suggestedState)
  }

   render(){
    const {inputField} =this.state;
    const filteredStates = stateList.filter((stateData)=>{
      return (stateData.stateFullName.toLowerCase().includes(inputField.toLowerCase()))
      })
     return (
     <div className = "formwrapper">  
     <form onSubmit = {(e)=>e.preventDefault()}>
       <input
          placeholder='Enter State'
          onKeyPress ={this.props.onEnter}
          onChange = {this.buttonHandler}
          value={this.state.inputField}
          
          />
               <div className = "searchfield">
     {filteredStates.map((state,i)=>{
       return( 
        <button
            key = {i} 
            className = "suggestion"
            onClick = {this.buttonHandler}
            value = {(filteredStates[i].stateFullName)}
        >{filteredStates[i].stateFullName}</button>) 
     })}
     </div>
     </form>

    </div>
   )
 }
}

export default SearchFeature;

