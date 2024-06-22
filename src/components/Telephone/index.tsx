'use client';
import React, { useEffect, useRef, useState } from 'react';
import TelephoneImg from '@images/Telephone/telephone.svg';
import styles from './Telephone.module.scss';
import Image from 'next/image';

const Telephone: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: React.MouseEvent<Document>): void => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside as unknown as EventListener, true);
        return () => {
            document.removeEventListener('click', handleClickOutside as unknown as EventListener, true);
        };
    }, []);

    return (
        <div className={styles.telephoneWrapper}>
            <div
                className={
                    !isOpen
                        ? styles.telephoneEntryContainer
                        : `${styles.telephoneEntryContainer} ${styles.telephoneEntryContainerOpen}`
                }
            >
                <div className={styles.telephoneLeft}>
                    <Image src={TelephoneImg} alt='telephone' onClick={() => setIsOpen((state) => !state)} />
                </div>
                <div className={styles.telephoneRight}>
                    <p className={styles.telephoneEntry}>
                        <a href='tel:+38765171711'>+387 (0)65171711 - Milan</a>
                    </p>
                    <p className={styles.telephoneEntry}>
                        <a href='tel:+38765588693'>+387 (0)65588693 - Petar</a>
                    </p>
                    <p className={styles.telephoneEntry}>
                        <a href='tel:+38758621300'>+387 (0)58621300 - tel / faks</a>
                    </p>

                    <p className={styles.telephoneEntry}>
                        <a href='mailto:ekolek@bioesen.com'>ekolek@bioesen.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Telephone;
