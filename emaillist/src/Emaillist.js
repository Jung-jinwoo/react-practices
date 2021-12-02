import React from 'react';
import styles from './assets/scss/Emaillist.scss';

const Emaillist = () => {
    return (
        <ul className={styles.Emaillist}>
            <Email />
            <Email />
            <Email />
        </ul>
    );
};

export default Emaillist;