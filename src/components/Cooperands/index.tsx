import React from 'react';
import styles from './Cooperands.module.scss';
import { cooperands } from './content';
import Image from 'next/image';
import MainHeading from '../MainHeading';

const Cooperands = () => {
    return (
        <div className={styles.cooperandsWrapper}>
            <MainHeading subtitle='Kooperanti' title='Lorem ipsum' shade='light' />
            <div className={styles.cooperandsContainer}>
                {cooperands.map((coop) => {
                    return (
                        <div key={coop.id} className={styles.gridItem}>
                            <Image src={coop.logo} alt={`logo-${coop.id}`} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cooperands;
