import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"
import { useGlobalContext } from "../../context"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText;
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0) {
      setSearchTerm("react");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText);
    }

    navigate("/book");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  return (
    <div className="search-bar">
      <div className="container">
        <div className="search-bar-content">
          <form className="search-bar" onSubmit={handleSubmit}>
            <div className="search-bar-elem flex flex-sb bg-white">
              <input type="text" className="form-control" placeholder="React ..." value={searchText} onInput={handleInput}/>
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