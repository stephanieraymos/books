import React from 'react';
import ReactDom from 'react-dom';


function Booklist() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return <article>
    <Image />
  </article>
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg" alt="" />
}





ReactDom.render(<Booklist />, document.getElementById('root'))