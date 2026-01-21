import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookInfo = ({ books = [], addToCart, cart = [] }) => {
  const { id } = useParams();

  // Find the book by route param
  const book = useMemo(
    () => books.find((b) => String(b.id) === String(id)),
    [books, id]
  );

  // Track whether user already added this book
  const [added, setAdded] = useState(false);

  // Keep `added` in sync with the cart (so refresh / nav reflects correct state)
  useEffect(() => {
    if (!book) return;
    const inCart = cart.some((item) => String(item.id) === String(book.id));
    setAdded(inCart);
  }, [cart, book]);

  if (!book) {
    return (
      <div className="bookinfo">
        <div className="container">
          <p>Book not found.</p>
          <Link to="/books">← Back to books</Link>
        </div>
      </div>
    );
  }

  // Helpers for display (safe fallbacks)
  const title = book.title ?? "Untitled";
  const author = book.author ?? book.authors ?? "Unknown author";
  const description =
    book.description ?? book.summary ?? "No description available.";
  const image =
    book.image ?? book.img ?? book.cover ?? book.imageLink ?? book.imageUrl;
  const rating = book.rating ?? book.averageRating;
  const price = book.price ?? book.originalPrice ?? book.cost;
  const salePrice = book.salePrice ?? book.discountPrice ?? book.currentPrice;

  const handleAddToCart = () => {
    if (added) return; // prevents duplicate adds
    addToCart(book);
    setAdded(true);
  };

  return (
    <div className="bookinfo">
      <div className="container">
        {/* Top / Breadcrumb */}
        <div className="bookinfo__top">
          <Link className="bookinfo__back" to="/books">
            ← Back
          </Link>
        </div>

        {/* Main Layout */}
        <div className="bookinfo__row">
          {/* Left: Image */}
          <div className="bookinfo__left">
            <figure className="bookinfo__img--wrapper">
              {image ? (
                <img className="bookinfo__img" src={image} alt={title} />
              ) : (
                <div className="bookinfo__img--placeholder">No Image</div>
              )}
            </figure>
          </div>

          {/* Right: Details */}
          <div className="bookinfo__right">
            <h1 className="bookinfo__title">{title}</h1>

            <p className="bookinfo__author">
              <span className="bookinfo__label">Author:</span> {author}
            </p>

            {rating != null && (
              <p className="bookinfo__rating">
                <span className="bookinfo__label">Rating:</span> {rating}
              </p>
            )}

            {/* Price block (supports sale + original) */}
            <div className="bookinfo__price">
              {salePrice != null ? (
                <>
                  <span className="bookinfo__price--sale">
                    ${Number(salePrice).toFixed(2)}
                  </span>
                  {price != null && (
                    <span className="bookinfo__price--original">
                      ${Number(price).toFixed(2)}
                    </span>
                  )}
                </>
              ) : price != null ? (
                <span className="bookinfo__price--regular">
                  ${Number(price).toFixed(2)}
                </span>
              ) : (
                <span className="bookinfo__price--regular">Price unavailable</span>
              )}
            </div>

            {/* Add to Cart */}
            <div className="bookinfo__actions">
              <button
                className={`btn bookinfo__btn ${added ? "btn--disabled" : ""}`}
                onClick={handleAddToCart}
                disabled={added}
              >
                {added ? "Added!" : "Add to Cart"}
              </button>

              {added && (
                <p className="bookinfo__added-msg">
                  ✅ This book is in your cart.
                </p>
              )}

              {/* Optional: go to cart link */}
              <Link className="bookinfo__cart-link" to="/cart">
                Go to cart →
              </Link>
            </div>

            {/* Description */}
            <div className="bookinfo__desc">
              <h3 className="bookinfo__desc--title">Summary</h3>
              <p className="bookinfo__desc--text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
