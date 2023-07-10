import { useCallback, useEffect, useState, createContext, useContext } from "react";

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const AppContext = createContext();

export default function AppProvider({children}) {
  const [searchTerm, setSearchTerm] = useState("react");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async() => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}&orderby={order}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=30`);
      const {items} = await response.json();
      console.log(items);

      if(items) {
        const books = items.slice(0, 30).map((bookSingle) => {
          const {id, volume_info} = bookSingle;

          return {
            id: id,
            authors: volume_info.authors,
            title: volume_info.title,
            categories: volume_info.categories,
            description: volume_info.description,
            images: volume_info.imageLinks
          }
        });

        setBooks(books);

        if(books.length > 1) {
          setResultTitle("Search Result:");
        } else {
          setResultTitle("No Search Result found!");
        }
      } else {
        setBooks({});
        setResultTitle("No Search Result found!");
      }

      setLoading(false); 

    } catch(error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks])

  return (
    <AppContext.Provider value= {{
      loading, books, setSearchTerm, resultTitle, setResultTitle,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext};