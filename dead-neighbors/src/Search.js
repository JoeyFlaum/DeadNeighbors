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

export default Search;

