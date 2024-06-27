import React from 'react';
import styles from './Cooperands.module.scss';
import { cooperands } from './content';
import Image from 'next/image';
import MainHeading from '../MainHeading';

const Cooperands = () => {
    return (
        <div className={styles.cooperandsWrapper}>
            <MainHeading subtitle='Kooperanti' title='Lorem ipsum' />
            <div className={styles.cooperandsContainer}>
                {cooperands.map((coop) => {
                    return (
                        <div className={styles.gridItem}>
                            <Image key={coop.id} src={coop.logo} alt={`logo-${coop.id}`} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cooperands;
