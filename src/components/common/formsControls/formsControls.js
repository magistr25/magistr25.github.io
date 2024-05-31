import React from 'react';
import styles from './formsControls.module.css'
import {Field} from "redux-form";

// export const TextArea = ({input, meta, ...props})=> {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
//             <div>
//                 <textarea {...props} {...input} />
//             </div>
//             {hasError && meta.error && <span>{meta.error}</span>}
//         </div>
//     )
// };
//
//
// export const Input = ({input, meta, ...props})=> {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
//             <div>
//                 <input {...props} {...input} />
//             </div>
//             {hasError && meta.error && <span>{meta.error}</span>}
//         </div>
//     )
// };



const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                {child}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const TextArea = (props) => {
    return <FormControl {...props} child={<textarea {...props.input} {...props} />} />;
};

export const Input = (props) => {
    return <FormControl {...props} child={<input {...props.input} {...props} />} />;
};

export const createField=(placeholder, name, validators, component, props = {}, text = "") => {
    return  (
        <div>
            <Field placeholder={placeholder} name={name}
                   validate={validators}
                   component={component}
                   {...props}/>{text}
        </div>
    )
}

