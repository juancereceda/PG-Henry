import React from "react";
import PaginateStyles from "./paginateStyles";

function Pagination({ paymentsPerPage, totalPayments, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPayments / paymentsPerPage); i++) {
    i < 10 ? pageNumbers.push(i) : pageNumbers.push(i);
  }

  return (
    <PaginateStyles>
      {pageNumbers &&
        pageNumbers.map((el) => {
          return (
            <h4 onClick={() => paginate(el)} className="numPage">
              {el}
            </h4>
          );
        })}
    </PaginateStyles>
  );
}

export default Pagination;
