import styles from "./Paginator.module.css";
import React from "react";


export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }
    return (
        <div className={styles.pages}>
            {slicedPages.map(p => (
                <span
                    key={p}
                    className={props.currentPage === p ? styles.selectedPage : undefined}
                    onClick={() => props.onPageChanged(p)}
                > {p} </span>
            ))}
        </div>
    )
}
