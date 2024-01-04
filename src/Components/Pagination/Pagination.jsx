"use client"

import React, { useMemo } from "react";
import Link from "next/link";

const Pagination = ({ postsPerPage, allPosts, onPageChange, currentPage }) => {
  
  const totalPages = useMemo(() => Math.ceil(allPosts / postsPerPage), [allPosts, postsPerPage]);

  const pageNumber = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4">
        
      {/* Botón anterior */}
      <button 
        onClick={handlePrevious} 
        className={`w-5 h-5 relative flex justify-center items-center bg-[white] rounded-full hover:bg-opacity-80 ${currentPage === 1 ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
        disabled={currentPage === 1}
      >
        <img src="https://file.rendit.io/n/nHUFaGIz6t2msnnOXF5j.svg" alt="Anterior" className="w-5 h-5" />
      </button>
      
      {pageNumber.map((number) => (
            <Link 
                href={`/${number}`}
                key={number} 
                onClick={(e) => {
                    e.preventDefault();
                    onPageChange(number);
                }}
                className={`w-10 h-10 flex justify-center items-center font-bold text-xl rounded-full hover:bg-[#1A1A1A] hover:text-white focus:outline-none focus:ring
                ${currentPage === number ? 'bg-[#1A1A1A] text-white' : 'bg-[white] text-black opacity-50'} `}

            >
                {number}
            </Link>
        ))}

      {/* Botón siguiente */}
      <button 
        onClick={handleNext} 
        className={`w-5 h-5 relative flex justify-center items-center bg-white rounded-full hover:bg-opacity-80 ${currentPage === totalPages ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
        disabled={currentPage === totalPages}
      >
        <img src="https://file.rendit.io/n/0q7b38Lq0jQ87p8Nijy1.svg" alt="Siguiente" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
