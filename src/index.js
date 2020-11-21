import React from 'react';
import ReactDom from 'react-dom';


function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return <article>
    <Title />
    By: <Author />
    <Image />
  </article>
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg" alt="" />
}

const Title = () => <h1>If Animals Kissed Good Night</h1>
const Author = () => <h1>Ann WhitFord Paul</h1>






ReactDom.render(<Booklist />, document.getElementById('root'))