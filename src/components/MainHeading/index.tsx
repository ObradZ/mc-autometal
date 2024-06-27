import React from 'react';
import styles from './MainHeading.module.scss';

interface mainHeadingProps {
    title: string;
    subtitle: string;
    shade: 'light' | 'dark';
    superStyles?: string;
}

const MainHeading = ({ title, subtitle, shade, superStyles }: mainHeadingProps) => {
    return (
        <div className={[styles.mainHeadingContainer, superStyles].join(' ')}>
            <h4 className={shade === 'light' ? styles.subHeadingLight : styles.subHeadingDark}>{subtitle}</h4>
            <h3 className={shade === 'light' ? styles.headingLight : styles.headingDark}>{title}</h3>
        </div>
    );
};

export default MainHeading;
