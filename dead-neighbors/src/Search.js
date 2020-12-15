import React from 'react';


const Search = ({onSearch,onEnter})=>{
   return (
     <form onSubmit = {(e)=>e.preventDefault()}>
       <input
         placeholder="Search for..."
         onKeyPress ={onEnter}
         onChange = {onSearch}
       />
     </form>
   )
 }

 /*class Search extends React.Component {
  constructor() {
    super();
    this.state = {value: ""};
  }

  update = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <input onChange={this.update} value={this.state.value} />
    );
  }
}*/
export default Search;

