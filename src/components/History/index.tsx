import React from 'react';
import styles from './History.module.scss';
import Image from 'next/image';
import { content } from './content';
import MainHeading from '../MainHeading';
import TeamImg from '../../../public/static/images/History/Team-min.jpg';
import SectionWrapper from '../SectionWrapper';
import GearLeft from '../../../public/static/images/Gears/Vector-left.svg';
import GearRight from '../../../public/static/images/Gears/Vector-right.svg';
import { useTranslations } from 'next-intl';

const History = () => {
    const t = useTranslations('History');
    return (
        <SectionWrapper>
            <div className={styles.container}>
                <div className={styles.historyContentTop}>
                    <div className={styles.historyTextTop}>
                        <MainHeading title={t('title')} shade='dark' />
                        <div className={styles.textBlock}>
                            <p>{t('text1')}</p>
                        </div>
                    </div>
                    <div className={styles.imageBlockTop}>
                        <Image src={GearLeft} alt='gear' className={styles.gearLeft} />
                        <Image src={GearRight} alt='gear' className={styles.gearRight} />
                    </div>
                </div>
                <div className={styles.historyContentBottom}>
                    <div className={styles.textBlock}>
                        <p>{t('text2')}</p>
                    </div>
                    <div className={styles.imageBlockBottom}>
                        <Image src={TeamImg} alt='factory worker img' className={styles.historyImg2} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default History;
