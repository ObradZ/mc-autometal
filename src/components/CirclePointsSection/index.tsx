import React from 'react';
import SectionWrapper from '../SectionWrapper';
import MainHeading from '../MainHeading';
import CenterImg from '@images/Team/settings.png';
import Image from 'next/image';
import { CirclePointsSectionProps } from './types';
import styles from './CirclePointsSection.module.scss';
import './circlePointsStyles.css';

/** Data prop should contain id with number from 0 to 5 - it affects css */
const CirclePointsSection = ({ title, subTitle, data, pointsBorder }: CirclePointsSectionProps) => {
    return (
        <SectionWrapper superStyles={styles.wrapper}>
            <MainHeading title={title} subtitle={subTitle} shade='dark' />
            <div className={styles.contentWrapper}>
                <Image src={CenterImg} alt='gear' className={styles.centerImage} />
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={[styles.pointWrapper, pointsBorder ? styles.pointBorder : ''].join(' ')}
                        id={`circleItem${item.id}`}
                    >
                        <Image src={item.img} alt={item.text} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default CirclePointsSection;
