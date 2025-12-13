// BooksSection.jsx
 import "./BookGrid.css";

const BookSection = ({ title, books }) => {
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
              </div>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSection;
