import { useCallback, useEffect, useState, createContext, useContext } from "react";

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const AppContext = createContext();

export default function AppProvider({children}) {
  const [searchTerm, setSearchTerm] = useState("react");
  const [filterTerm, setFilterTerm] = useState("computers");
  const [orderBy, setOrderBy] = useState("relevance");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async() => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}+subject:${filterTerm}&orderBy=${orderBy}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=30`);
      const {items} = await response.json();

      if(items) {
        const newBooks = items.slice(0, 30).map((bookSingle) => {
          const {id, volumeInfo} = bookSingle;

          return {
            id: id,
            authors: volumeInfo.authors,
            title: volumeInfo.title,
            categories: volumeInfo.categories,
            description: volumeInfo.description,
            images: volumeInfo.imageLinks
          }
        });

        setBooks(newBooks);

        if(newBooks.length > 1) {
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
  }, [searchTerm, filterTerm, orderBy]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks])

  return (
    <AppContext.Provider value= {{
      loading, books, setSearchTerm, resultTitle, setResultTitle, setFilterTerm, setOrderBy
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext};