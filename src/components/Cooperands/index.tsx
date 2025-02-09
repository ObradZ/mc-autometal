import React from 'react';
import styles from './Cooperands.module.scss';
import { cooperands } from './content';
import Image from 'next/image';
import MainHeading from '../MainHeading';
import SectionWrapper from '../SectionWrapper';

const Cooperands = ({ title }: { title: string }) => {
    return (
        <div className={styles.cooperandsWrapper}>
            <SectionWrapper superStyles={styles.cooperandsHeadingContainer}>
                <MainHeading title={title} shade='light' />
            </SectionWrapper>

            <SectionWrapper superStyles={styles.cooperandsContainer}>
                {cooperands.map((coop) => {
                    return (
                        <div key={coop.id} className={styles.gridItem}>
                            <Image src={coop.logo} alt={`logo-${coop.id}`} />
                        </div>
                    );
                })}
            </SectionWrapper>
        </div>
    );
};

export default Cooperands;
