import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.loaderWrapper_loader}/>
        </div>
    );
};

export default Loader;