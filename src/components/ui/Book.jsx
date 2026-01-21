import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    setImgSrc(null); // show skeleton while loading new image

    if (!book?.url) return;

    const image = new Image();
    image.src = book.url;

    image.onload = () => {
      // optional small delay so skeleton feels smooth
      setTimeout(() => {
        if (mountedRef.current) {
          setImgSrc(image.src);
        }
      }, 300);
    };

    image.onerror = () => {
      // stop infinite skeleton if image fails
      if (mountedRef.current) {
        setImgSrc("error");
      }
    };

    return () => {
      mountedRef.current = false;
    };
  }, [book?.url]);

  return (
    <div className="book">
      {imgSrc && imgSrc !== "error" ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={imgSrc} alt={book.title || ""} className="book__img" />
            </figure>
          </Link>

          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          <Rating rating={book.rating} />
          <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
