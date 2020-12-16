import React from 'react';

class SearchFeature extends React.Component{
  constructor(){
    super()
    this.state ={
    suggestedState:'',
    filteredStates:['texas'],
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
     return (
     <div>  
     <form onSubmit = {(e)=>e.preventDefault()}>
       <input
          placeholder='Enter State'
          onKeyPress ={this.props.onEnter}
          onChange = {this.buttonHandler}
          value={this.state.inputField}
          
          />
     </form>
     <button 
            className = "suggestion"
            onClick = {this.buttonHandler}
            value = {this.state.filteredStates[0]}
      />
    </div>
   )
 }
}

export default SearchFeature;

