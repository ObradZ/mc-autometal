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
                ref={ref}
                onClick={() => setIsOpen((state) => !state)}
                className={
                    !isOpen
                        ? styles.telephoneContainer
                        : `${styles.telephoneContainer} ${styles.telephoneContainerOpen}`
                }
            >
                <Image src={TelephoneImg} alt='telephone' />
            </div>
            <div
                className={
                    !isOpen
                        ? styles.telephoneEntryContainer
                        : `${styles.telephoneEntryContainer} ${styles.telephoneEntryContainerOpen}`
                }
            >
                <p className={styles.telephoneEntry}>Tel/Fax:</p>
                <p className={styles.telephoneEntry}>
                    <a href='tel:+38125729999'>+381 25 729999</a>
                </p>
                <p className={styles.telephoneEntry}>
                    <a href='tel:+38125723300'>+381 25 723 300</a>
                </p>
                <p className={styles.telephoneEntry}>
                    <a href='tel:+38125723829'></a>
                </p>
                <br />
                <p className={styles.telephoneEntry}>Email:</p>
                <p className={styles.telephoneEntry}>
                    <a href='mailto:ekolek@bioesen.com'>ekolek@bioesen.com</a>
                </p>
            </div>
        </div>
    );
};

export default Telephone;
