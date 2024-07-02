import React from 'react';
import styles from './History.module.scss';
import Image from 'next/image';
import { content } from './content';
import MainHeading from '../MainHeading';
import HistoryImg1 from '../../../public/static/images/History/history1-min.jpg';
import HistoryImg2 from '../../../public/static/images/History/history2-min.jpg';
import SectionWrapper from '../SectionWrapper';

const History = () => {
    return (
        <SectionWrapper>
            <div className={styles.container}>
                <div className={styles.historyContentTop}>
                    <div className={styles.historyTextTop}>
                        <MainHeading title={content.title} subtitle={content.subtitle} shade='dark' />
                        <div className={styles.textBlock}>
                            <p>{content.text1}</p>
                        </div>
                    </div>
                    <div className={styles.imageBlock}>
                        <Image src={HistoryImg1} alt='factory outside img' className={styles.historyImg1} />
                    </div>
                </div>
                <div className={styles.historyContentBottom}>
                    <div className={styles.textBlock}>
                        <p>{content.text2}</p>
                    </div>
                    <div className={styles.imageBlock}>
                        <Image src={HistoryImg2} alt='factory worker img' className={styles.historyImg2} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default History;
