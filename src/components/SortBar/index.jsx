import { useGlobalContext } from "../../context"
import "./SortBar.css"

export default function SortBar() {
  const {setFilterTerm, setOrderBy} = useGlobalContext();
  const categories = ["", "art", "biography", "computers", "history", "medical", "poetry"];
  const order = ["relevance", "newest"];

  return(
    <div className="sort-bar container sort-bar-content">
          <form className="sort-bar sort-bar-elem flex flex-sb">
              <label className="text-white">Categories</label>
              <select className="form-control" onChange={(e) => setFilterTerm(e.target.value)}>
                {categories.map((c) => 
                  <option value={c}>{c}</option>
                )}
              </select>
              <label className="text-white">Sorting by</label>
              <select className="form-control" onChange={(e) => setOrderBy(e.target.value)}>
                {order.map((o) => 
                  <option value={o}>{o}</option>
                )}
              </select>
          </form>
    </div>
  ) 
}