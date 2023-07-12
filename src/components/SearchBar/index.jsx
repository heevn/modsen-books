import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"
import { AppContext, useGlobalContext } from "../../context"
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0) {
      setSearchTerm("react");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className="search-bar">
      <div className="container">
        <div className="search-bar-content">
          <form className="search-bar" onSubmit={handleSubmit}>
            <div className="search-bar-elem flex flex-sb bg-white">
              <input type="text" className="form-control" placeholder="React ..." ref={searchText}/>
              <button type="submit" className="flex flex-c" onClick={handleSubmit}>
                <FaSearch className="text-black" size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}