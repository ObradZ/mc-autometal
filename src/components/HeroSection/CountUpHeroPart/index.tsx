'use client';
import CountUp from 'react-countup';
import { CountUpHeroPartProps } from './types';
import styles from './CountUp.module.scss';

const CountUpHeroPart = ({ data }: CountUpHeroPartProps) => {
    return (
        <div className={styles.wrapper}>
            {data.map((item) => {
                return item.property === 'divider' ? (
                    <div className={styles.divider} />
                ) : (
                    <div key={item.id}>
                        <div className={styles.countUpWrapper}>
                            <div className={styles.prefix}>{'>'}</div>
                            <CountUp
                                enableScrollSpy
                                scrollSpyDelay={0.6}
                                start={1}
                                delay={0.4}
                                className={styles.countUp}
                                end={item.number}
                                duration={2}
                            />
                            <div className={styles.sufix}>mm</div>
                        </div>
                        <div className={styles.property}>{item.property}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default CountUpHeroPart;
