import preloader from '../../../assets/images/30.gif';
import React from 'react';
import styles from './Preloader.module.css'

export const Preloader = () =>{
        return <img className={styles.preloader} src={preloader} alt=''/>

}


