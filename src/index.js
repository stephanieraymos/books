import React from 'react';
import ReactDom from 'react-dom';
import './index.css'


books = [
  {
    title:'If Animals Kissed Good Night',
    author:'Ann WhitFord Paul',
    img:'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
  },
  {
    title:'Human',
    author:'Brandon Stanton',
    img: 'https://m.media-amazon.com/images/I/81GeAcdMCsL._AC_UY218_.jpg',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
  }
]
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />
      })}
    </section>
  );
}

const Book = ({img, title, author, description}) => {
  return (
    <article className="book">
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>By: {author}</h4>
      <p>{description}</p>
    </article>
  );
};



ReactDom.render(<Booklist />, document.getElementById('root')
);
