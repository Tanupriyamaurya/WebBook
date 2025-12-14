import "./BookGrid.css";
import { isLoggedIn } from "../../../utils/authUtils";
import { addToCart } from "../../../utils/cartUtils";

const BookSection = ({ title, books }) => {
  const handleAddToCart = (book) => {
    if (!isLoggedIn()) {
      alert("Please login first");
      return;
    }

    addToCart(book);
    alert(`${book.title} added to cart`);
  };

  return (
    <div className="books-section">
      {title && <h2 className="section-heading">{title}</h2>}

      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="wishlist-icon">♡</div>

            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />

            <div className="book-info">
              <div className="book-title">{book.title}</div>

              {/* ✅ Author */}
              {book.author && (
                <div className="book-author">
                  <strong>Author:</strong> {book.author}
                </div>
              )}

              {/* ✅ Availability */}
              {book.availability && (
                <div
                  className={`availability ${
                    book.availability === "In Stock" ||
                    book.availability === "New" ||
                    book.availability === "Downloadable"
                      ? "in-stock"
                      : "out-stock"
                  }`}
                >
                  {book.availability}
                </div>
              )}

              <div className="price">
  ₹{book.price ?? "0"}
</div>

            </div>

            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(book)}
              disabled={book.availability === "Out of Stock"}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSection;
