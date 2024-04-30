import React from "react";

function PaginationComponent({ brands, page, setPage }) {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(brands.length / itemsPerPage);
  const visiblePages = 5;

  const getButtonClass = (pageNum) => {
    return page === pageNum
      ? "flex items-center justify-center px-4 h-10 leading-tight text-gray-700 bg-gray-100 border border-gray-300"
      : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  };

  // Calculate the start and end page numbers
  let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
  let endPage = startPage + visiblePages - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  // Ensure we're not trying to create an array with a negative length
  const numPages = Math.max(0, endPage - startPage + 1);

  return (
    <ul className="inline-flex -space-x-px text-base h-10">
      <li>
        <a
          onClick={() => setPage(Math.max(1, page - 1))}
          className={
            page > 1
              ? getButtonClass(page - 1)
              : getButtonClass(1) + " cursor-not-allowed"
          }
        >
          Previous
        </a>
      </li>
      {[...Array(numPages)].map((_, index) => (
        <li key={index}>
          <a
            onClick={() => setPage(startPage + index)}
            className={getButtonClass(startPage + index)}
          >
            {startPage + index}
          </a>
        </li>
      ))}
      <li>
        <a
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          className={
            page < totalPages
              ? getButtonClass(page + 1)
              : getButtonClass(totalPages) + " cursor-not-allowed"
          }
        >
          Next
        </a>
      </li>
    </ul>
  );
}

export default PaginationComponent;
