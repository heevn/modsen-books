import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../Loader";
import coverImg from "../../assets/cover-not-found.png";
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://www.googleapis.com/books/v1/volumes/";

export default function BookDetails() {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {id, volumeInfo} = data;
          const newBook = {
            id: id,
            authors: volumeInfo.authors,
            title: volumeInfo.title,
            categories: volumeInfo.categories,
            description: volumeInfo.description,
            images: volumeInfo.imageLinks
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if(loading) return <Loader />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.imageLinks?.smallThumbnail || coverImg} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Authors: </span>
              <span className='text-italic'>{book?.authors}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Categories: </span>
              <span className='text-italic'>{book?.categories}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}