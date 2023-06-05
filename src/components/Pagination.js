import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Pagination1({ setCurrentPage, currentPage, totalPage }) {
    const pageNumbers = [];
    // const [currentPage, setCurrentPage] = useState(1)
    const onPageChange = (number) => {
        setCurrentPage(number)
        // console.log(number)
    }
    // Calculate the range of page numbers to display
    const maxPagesToShow = 5;
    const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPage);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    const showCurrentPage = (number) => {
        if (currentPage === number) {
            return {
                color: "green", fontSize: 'x-large'
            }
        }
    }

    return (
        <div className="row row-cols-1 row-cols-md-5 g-4 m-5 d-flex justify-content-end">
            <Pagination>
                <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />
                <Pagination.Ellipsis />
                {pageNumbers.map((number) => (
                    <Pagination.Item key={number}
                        onClick={() => onPageChange(number)}
                        disabled={currentPage === number}

                    >
                        <span style={showCurrentPage(number)}>{number}</span>
                    </Pagination.Item>
                ))}
                <Pagination.Ellipsis />
                <Pagination.Next disabled={currentPage === totalPage}
                    onClick={() => onPageChange(currentPage + 1)}
                />
            </Pagination>
        </div>
    );
}

export default Pagination1;
