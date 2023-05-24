import React, { useState, useEffect } from "react";
import "./loader.css"

const MyComponent = () => {
 
  setTimeout(function () {
    let load = document.getElementById('load');
  if (!load.classList.contains('done')) {
    load.classList.add('done');
  }
  },2000);
  
    
  

  return (
    <div id="load" >
     
        <span class="loader"></span>
      
     
    </div>
  );
};

export default MyComponent;
