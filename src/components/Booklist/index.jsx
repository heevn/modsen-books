import "./Booklist.css"
import { useGlobalContext } from "../../context";
import Loader from "../Loader";
import Book from "./Book";
import Pagination from "../Pagination";

export default function Booklist() {
  const {books, loading, resultTitle} = useGlobalContext();

  console.log(books);

  if (loading)  return <Loader />

  return (
    <section className="booklist">
      <div className="container">
        <h2>{resultTitle}</h2>
      </div>
      <div className="booklist-content grid">
        {
          books.map((item, index) => {
            return (
              <Book key={index} book={item} />
            )
          })
        }
      </div>
      <Pagination />
    </section>
  )
}