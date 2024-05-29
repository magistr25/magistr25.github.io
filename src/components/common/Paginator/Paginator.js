import React, { useState } from "react";
import styles from "./Paginator.module.css";

export const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSize = 5; // Количество страниц, отображаемых за раз
    const [portionNumber, setPortionNumber] = useState(1);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && (
                <button
                    className={styles.button}
                    onClick={() => setPortionNumber(portionNumber - 1)}
                >
                    Prev
                </button>
            )}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => (
                    <span
                        key={p}
                        className={currentPage === p ? `${styles.page} ${styles.selectedPage}` : styles.page}
                        onClick={() => onPageChanged(p)}
                    >
                        {p}
                    </span>
                ))}

            {portionNumber < portionCount && (
                <button
                    className={styles.button}
                    onClick={() => setPortionNumber(portionNumber + 1)}
                >
                    Next
                </button>
            )}
        </div>
    );
};
