import React from 'react';
import classes from "./paginator.module.css";

export const Paginator = (props) => {
    let currentPage = props.currentPage;
    let pages = []
    for (let i = props.leftBorder; i <= props.rightBorder; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.paginationWrapper}>
            <button onClick={props.onFirstPageChange} disabled={currentPage === 1 && true||props.isLoading}>First Page</button>
            <button disabled={currentPage <=1&& true||props.isLoading} onClick={props.onPrevPageChange}>Prev</button>
            {pages.map((p,index)=> {
                return <span onClick={(e)=> {
                    props.isLoading && e.preventDefault();
                    props.onPageChange(p);
                }}
                             className={`${currentPage === p ? classes.selectedPage:''} ${classes.itemPage}`}
                             key={index}>{p}</span>
            })}
            <button disabled={currentPage >=props.pagesCount && true||props.isLoading} onClick={props.onNextPageChange}>Next</button>
            <button onClick={props.onLastPageChange} disabled={currentPage === props.pagesCount && true||props.isLoading}>Last Page</button>
        </div>
    )
};