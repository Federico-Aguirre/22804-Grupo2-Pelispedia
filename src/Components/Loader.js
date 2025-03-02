import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styles from '../Styles/Loader.module.css';

export function Loader() {
    return (
        <div className={styles.loader}>
            <FaSpinner className={styles.loading} size={60} />
        </div>
    )
}