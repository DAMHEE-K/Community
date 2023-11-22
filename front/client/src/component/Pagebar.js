import React, { useState } from "react";
import Pagination from "react-js-pagination";
import styles from "./Pagebar.module.css";

const Pagebar = ({ totalCnt, currentPage, handlePageChange }) => {
    const [page, setPage] = useState(currentPage);

    const onChange = (pageNumber) => {
        setPage(pageNumber);
        handlePageChange(pageNumber-1);
      };

    return (
        <Pagination
        activePage={page} 
        itemsCountPerPage={5} 
        totalItemsCount={totalCnt} 
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"} 
        onChange={onChange}
        itemClass={styles.paginationItem}
        linkClass={styles.paginationLink}
      />
    );
}

export default Pagebar;
