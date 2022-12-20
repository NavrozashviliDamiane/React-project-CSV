import React from 'react'
import './New.css'


const Content = () => {
  return (
    <div className='main'>
        <div className="menu-container">
  
  <input type="checkbox" id="openmenu" className="hamburger-checkbox" />
  
  <div className="hamburger-icon"> How does it works?
    <label for="openmenu" id="hamburger-label">
      <span></span>
      <span></span>
      <span></span>

      <span></span>
    </label>    
  </div>

    <div className="menu-pane">
      
      <nav>
        <ul className="menu-links">
     
          <li><a href="###">1. First Of all you need CSV file to Upload <br></br>  <br></br>
          2. Then you will see table of data containing inside csv file</a>
           
          </li>
       
        </ul>
        
        
      </nav>
    </div>
  <div className="main-text">
    <h1>"Cook" from your CSV file</h1>
  
    <p>Made with love </p>
  </div>
</div>
    </div>
  )
}

export default Content