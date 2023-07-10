import "./SortBar.css"

export default function SortBar() {
  return(
    <div className="sort-bar container sort-bar-content">
          <form className="sort-bar sort-bar-elem flex flex-sb">
              <label className="text-white">Categories</label>
              <select className="form-control">
                <option>all</option>
              </select>
              <label className="text-white">Sorting by</label>
              <select className="form-control"/>
          </form>
    </div>
  ) 
}