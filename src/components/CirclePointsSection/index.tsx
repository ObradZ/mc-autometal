import React from 'react';
import SectionWrapper from '../SectionWrapper';
import MainHeading from '../MainHeading';
import CenterImg from '@images/Team/settings.png';
import Image from 'next/image';
import { CirclePointsSectionProps } from './types';
import styles from './CirclePointsSection.module.scss';
import './circlePointsStyles.css';
import { useTranslations } from 'next-intl';
/** Data prop should contain id with number from 0 to 5 - it affects css */
const CirclePointsSection = ({
    title,
    subTitle,
    data,
    pointsBorder,
    areImagesSvgs = true
}: CirclePointsSectionProps) => {
    const t = useTranslations('About_us');
    return (
        <SectionWrapper superStyles={styles.wrapper}>
            <MainHeading title={title} subtitle={subTitle} shade='dark' superStyles={styles.mainHeading} />
            <p className={styles.headingText}>{t('circle_points_section_text1')}</p>
            <p className={styles.headingText}>{t('circle_points_section_text2')}</p>
            <div className={styles.contentWrapper}>
                <Image src={CenterImg} alt='gear' className={styles.centerImage} />
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={[styles.pointWrapper, pointsBorder ? styles.pointBorder : ''].join(' ')}
                        id={`circleItem${item.id}`}
                    >
                        <Image className={areImagesSvgs ? '' : styles.radiusImage} src={item.img} alt={item.text} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default CirclePointsSection;
