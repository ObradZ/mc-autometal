import React from 'react';
import styles from './MainHeading.module.scss';
const MainHeading = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className={styles.mainHeadingContainer}>
            <h4 className={styles.subHeading}>{subtitle}</h4>
            <h3 className={styles.heading}>{title}</h3>
        </div>
    );
};

export default MainHeading;
