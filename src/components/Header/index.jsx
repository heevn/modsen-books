import SearchBar from "../SearchBar";
import SortBar from "../SortBar";
import "./Header.css";

export default function Header() {
  return (
    <div className='holder'>
      <header className='header'>
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Search for books
          </h2><br />
          <SearchBar />
          <SortBar />
        </div>
      </header>
    </div>
  )
}
