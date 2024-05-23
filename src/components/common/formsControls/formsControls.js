import React from 'react';
import styles from './formsControls.module.css'

export const TextArea = ({input, meta, ...props})=> {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                <textarea {...props} {...input} />
            </div>
            {hasError && meta.error && <span>{meta.error}</span>}
        </div>
    )
};
