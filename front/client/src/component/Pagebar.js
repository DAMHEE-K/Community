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
        activePage={page} // 현재 페이지
        itemsCountPerPage={5} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={totalCnt} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator의 페이지 범위
        prevPageText={"‹"} // "이전"을 나타낼 텍스트
        nextPageText={"›"} // "다음"을 나타낼 텍스트
        onChange={onChange} // 페이지 변경을 핸들링하는 함수
        itemClass={styles.paginationItem} // Apply your styles using CSS modules
        linkClass={styles.paginationLink} // Apply your styles using CSS modules
      />
    );
}

export default Pagebar;
