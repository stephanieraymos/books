import React from 'react';
import ReactDom from 'react-dom';


function Greeting() {
  return (
    <div>
      <h4>Tutorial Project</h4>
    </div>
  )
}



ReactDom.render(<Greeting />, document.getElementById('root'))