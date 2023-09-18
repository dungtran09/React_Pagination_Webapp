import React from "react";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
const PaginationButton = ({ totalPages, currentPage, setCurrentPage }) => {
  const paginationVatiants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      },
    },
  };

  const handlerPageClick = ({ selected }) => {
    console.log(selected + 1);
    setCurrentPage(selected);
  };

  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <>
      <motion.div
        variants={paginationVatiants}
        initial="hidden"
        animate="visible"
      >
        <ReactPaginate
          breakLabel={<span className="mr-4">...</span>}
          nextLabel={
            showNextButton ? (
              <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md cursor-poiter">
                <BsChevronRight />
              </span>
            ) : null
          }
          onPageChange={handlerPageClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel={
            showPrevButton ? (
              <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4 cursor-poiter">
                <BsChevronLeft />
              </span>
            ) : null
          }
          containerClassName="flex justify-center items-center mt-8 mb-4"
          pageClassName="block border border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4 cursor-poiter"
          activeClassName="bg-purple text-white"
        />
      </motion.div>
    </>
  );
};

export default PaginationButton;
