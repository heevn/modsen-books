import "./Booklist.css"
import { useGlobalContext } from "../../context";
import Loader from "../Loader";

export default function Booklist() {
  const {books, loading, resultTitle} = useGlobalContext();

  if (loading)  return <Loader />

  return (
    <section className="booklist">
      <div className="container">
        <h2>{resultTitle}</h2>
      </div>
    </section>
  )
}