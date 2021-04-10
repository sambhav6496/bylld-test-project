import React from "react";

function Pagination({ shipmentsPerPage, totalShipments, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalShipments / shipmentsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="oagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a href="!#">{number}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
