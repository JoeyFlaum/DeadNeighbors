import React from 'react';


const Search = ({onSearch})=>{
   return (
     <form>
       <input
         placeholder="Search for..."
         onChange = {onSearch}
       />
     </form>
   )
 }

export default Search;