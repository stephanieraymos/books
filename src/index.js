import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  { id: 1,
    title: "Waking Up",
    author: "Sam Harris",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61POkmGjDqL.jpg",
    description:
      "For the millions of Americans who want spirituality without religion, Sam Harris’s latest New York Times bestseller is a guide to meditation as a rational practice informed by neuroscience and psychology.",
  },
  { id: 2,
    title: "Human",
    author: "Brandon Stanton",
    img: "https://m.media-amazon.com/images/I/81GeAcdMCsL._AC_UY218_.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

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
    alert('Clicked')
  }

  const anotherButt = () => {
    console.log({author})
  }
  
  return (
    <article className="book" onMouseOver={() => {
      console.log(title)
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>By: {author}</h4>
      <button type="button" onClick={clickHandler}>Button</button>
      <button type="button" onClick={anotherButt}>Another button</button>
      <p>{description}</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
