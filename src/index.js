import React from 'react';
import ReactDom from 'react-dom';
import './index.css'


//Variables
const title = 'If Animals Kissed Good Night'
const author = 'Ann WhitFord Paul'
const img = 'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg'


function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>By: {author}</h4>
    </article>
  );
};



ReactDom.render(<Booklist />, document.getElementById('root')
);
