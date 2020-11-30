import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'If Animals Kissed Good Night'
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg" alt="" />
      <h1>If Animals Kissed Good Night</h1>
      <h4>By: Ann WhitFord Paul</h4>
    </article>
  );
};



ReactDom.render(<Booklist />, document.getElementById('root')
);
