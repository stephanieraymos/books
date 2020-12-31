import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import {books} from "./books"


function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, description } = props;

  const clickHandler = () => {
    alert("Clicked");
  };

  const anotherButt = () => {
    console.log({ author });
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>By: {author}</h4>
      <button type="button" onClick={clickHandler}>
        Button
      </button>
      <button type="button" onClick={anotherButt}>
        Another button
      </button>
      <p>{description}</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
