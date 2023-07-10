import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="container">
        <div className="search-bar-content">
          <form className="search-bar">
            <div className="search-bar-elem flex flex-sb bg-white">
              <input type="text" className="form-control" placeholder="The Lost World ..." />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-black" size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}