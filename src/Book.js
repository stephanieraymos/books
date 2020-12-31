import React from 'react'

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

export default Book
