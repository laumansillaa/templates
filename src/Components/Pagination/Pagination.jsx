"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import style from './styles/index.module.css'
const Pagination = ({ postsPerPage, allPosts, onPageChange, currentPage }) => {
  const totalPages = useMemo(
    () => Math.ceil(allPosts / postsPerPage),
    [allPosts, postsPerPage]
  );

  const pageNumber = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

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
    <div className={style.contPagination}>
      {/* Botón anterior */}
      <button
        onClick={handlePrevious}
        // className={`w-5 h-5 relative flex justify-center items-center bg-[white] rounded-full hover:bg-opacity-80 ${
        //   currentPage === 1 ? "opacity-50 cursor-default" : "cursor-pointer"
        // }`}
        className={style.buttonPagination}
        disabled={currentPage === 1}
      >
        <img
          src="https://file.rendit.io/n/nHUFaGIz6t2msnnOXF5j.svg"
          alt="Anterior"
          className="w-5 h-5"
        />
      </button>

      {pageNumber.map((number) => (
        <Link
          href={`/${number}`}
          key={number}
          onClick={(e) => {
            e.preventDefault();
            onPageChange(number);
          }}
          className={`${style.numPagination} ${
            currentPage === number ? style.active : style.disabled
          }`}
        >
          {number}
        </Link>
      ))}
      {/* Botón siguiente */}
      <button
        onClick={handleNext}
        // className={`w-5 h-5 relative flex justify-center items-center bg-white rounded-full hover:bg-opacity-80 ${
        //   currentPage === totalPages
        //     ? "opacity-50 cursor-default"
        //     : "cursor-pointer"
        // }`}
        className={style.buttonPagination}

        disabled={currentPage === totalPages}
      >
        <img
          src="https://file.rendit.io/n/0q7b38Lq0jQ87p8Nijy1.svg"
          alt="Siguiente"
          className="w-5 h-5"
        />
      </button>
    </div>
  );
};

export default Pagination;
