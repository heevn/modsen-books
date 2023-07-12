import { Link } from "react-router-dom";
import CoverNotFound from "../../assets/cover-not-found.png";
import "./Booklist.css"

export default function Book({book}) {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book.images?.smallThumbnail || CoverNotFound} alt={book.title} />
      </div>
      <div className="book-item-info text-start">
        <div className="book-item-info-item categorie fs=15 text-underlined">
          <span>{book.categories}</span>
        </div>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>
        <div className="book-item-info-item author fs=15">
          <span>{book.authors?.join(", ")}</span>
        </div>
      </div>
    </div>
  )
}