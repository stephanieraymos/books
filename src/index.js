import React from 'react';
import ReactDom from 'react-dom';


function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => {
  return <h4>Stephanie Raymos</h4>
}

const Message = () => {
  return <p>Some text</p>

}




ReactDom.render(<Greeting />, document.getElementById('root'))