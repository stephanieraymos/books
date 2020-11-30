import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function Booklist() {
  return (
    <section className="booklist">
      <Book title='If Animals Kissed Good Night' author='Ann WhitFord Paul' img='https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg' />
      <Book title='Humans' author='Brandon Stanton' img='https://m.media-amazon.com/images/I/81GeAcdMCsL._AC_UY218_.jpg' />
      <Book title='' author='' img='' />
      <Book title='' author='' img='' />
      <Book title='' author='' img='' />
      <Book title='' author='' img='' />
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props
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
