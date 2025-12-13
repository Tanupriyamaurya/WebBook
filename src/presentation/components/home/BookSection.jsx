
 import "./BookGrid.css";
import { isLoggedIn } from "../../../utils/authUtils";
import { addToCart } from "../../../utils/cartUtils";
const BookSection = ({ title, books }) => {
  const handleAddToCart = (book) => {
    // 🔐 LOGIN CHECK
    if (!isLoggedIn()) {
      alert("Please login first");
      return;
    }

    // Add book to cart
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
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <div className="book-title">{book.title}</div>
              <div className="book-author">By {book.author}</div>
              <div className="availability">{book.availability}
                <div className="price">{book.price}</div>
              </div>
            </div>
            <button className="add-to-cart-btn"  onClick={() => handleAddToCart(book)}
>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSection;
