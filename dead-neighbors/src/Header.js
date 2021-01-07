import React from 'react';

const Header =()=>{
    return(
        <header>
        <div className = 'deadTitle'> 
          <div className = 'headerTitle'>
            <h1>Dead Neighbors</h1>
            <p><em>Bringing humanity to numbers</em></p>
          </div>
        </div>
          <nav className = 'headerNav'>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Resources</li>
              <li>About</li>
              <li>More Details</li>
            </ul>
          </nav>        
      </header>
    )
}

export default Header;