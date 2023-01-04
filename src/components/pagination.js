import React from "react";

import ReactPaginate from "react-paginate";

export const PaginationComponents = ({ getPage, countPage }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  //   const  pageCount=500
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={countPage}
      previousLabel="< السابق"
      containerClassName={"pagination justify-content-center pt-4 "}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      nextClassName={"page-item"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link "}
      activeClassName={"active color"}
    />
  );
};
