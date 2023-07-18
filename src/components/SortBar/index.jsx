import { useGlobalContext } from "../../context"
import "./SortBar.css"
import { categories, order } from "../../utils/consts";

export default function SortBar() {
  const {setFilterTerm, setOrderBy} = useGlobalContext();

  return(
    <div className="sort-bar container sort-bar-content">
          <form className="sort-bar sort-bar-elem flex flex-sb">
              <label className="text-white">Categories</label>
              <select className="form-control" onChange={(e) => setFilterTerm(e.target.value)}>
                {categories.map((categorie) => 
                  <option value={categorie}>{categorie}</option>
                )}
              </select>
              <label className="text-white">Sorting by</label>
              <select className="form-control" onChange={(e) => setOrderBy(e.target.value)}>
                {order.map((order) => 
                  <option value={order}>{order}</option>
                )}
              </select>
          </form>
    </div>
  ) 
}