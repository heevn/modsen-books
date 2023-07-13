import { useCallback, useEffect, useState, createContext, useContext } from "react";

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const AppContext = createContext();

export default function AppProvider({children}) {
  const [searchTerm, setSearchTerm] = useState("react");
  const [filterTerm, setFilterTerm] = useState("");
  const [orderBy, setOrderBy] = useState("relevance");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [page, setPage] = useState(1);

  const fetchBooks = useCallback(async() => {
    setLoading(true);
    try {
      setPage(1);
      const response = await fetch(`${URL}${searchTerm}${filterTerm.length?`+subject:${filterTerm}`:""}&orderBy=${orderBy}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=30`);
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

  const pagination = useCallback(async ()=>{
    const response = await fetch(`${URL}${searchTerm}+subject:${filterTerm}&orderBy=${orderBy}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=30&start-index=${(page-1)*30}`)
    const {items} = await response.json()
    if(items){
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
      setBooks([...books, ...newBooks])
    }
  }, [page])

  useEffect(()=>{
    pagination()
  }, [page])

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks])

  return (
    <AppContext.Provider value= {{
      loading, books, setSearchTerm, resultTitle, setResultTitle, setFilterTerm, setOrderBy, page, setPage
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext};