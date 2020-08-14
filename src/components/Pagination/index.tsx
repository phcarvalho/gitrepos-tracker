import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './styles.css'

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, lastPage, handlePageChange }) => {
  const [pages, setPages] = useState([currentPage])

  useEffect(() => {
    const pagesArray = [];

    const minPage = currentPage - 2;
    const maxPage = currentPage + 2;
    
    if(maxPage <= lastPage && minPage >= 1) {
      for (let i = currentPage - 2; i <= maxPage; i++) {
        pagesArray.push(i);
      }
    } else if(minPage < 1) {
      for (let i = 1; i <= 5; i++) {
        pagesArray.push(i);
      }
    } else if(maxPage > lastPage) {
      for (let i = lastPage - 4; i <= lastPage; i++) {
        pagesArray.push(i);
      }
    } else {
      for (let i = 1; i <= maxPage; i++) {
        pagesArray.push(i);
      }
    }

    setPages(pagesArray);
  }, [currentPage])

  return (
    <div className="pagination-container">
      <button className="arrow-left" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        <div>
          <FaArrowLeft size={12} />
        </div>
      </button>
      { pages.map((pageNumber) => (
        <button 
          key={pageNumber} 
          disabled={pageNumber === currentPage} 
          style={{
            background: currentPage === pageNumber ? "#26947e" : "#eee",
            color: currentPage === pageNumber ? "#eee" : "#393E41"
          }}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button className="arrow-right" disabled={currentPage === lastPage} onClick={() => handlePageChange(currentPage + 1)}>
        <div>
          <FaArrowRight size={12} />
        </div>
      </button>
    </div>
  )
}

export default Pagination;