import { useGlobalContext } from "../../context"
import "./Pagination.css"


export default function Pagination(){
    const {page, setPage, books} = useGlobalContext()
    function incrementPage(){
        if(books.length % 30 === 0)
            setPage((p)=> p+1)
    }
    return(
            <div onClick={incrementPage} className="pagination-wrapper">Load more</div>
    )
}