'use client';

import React, { useState, useEffect } from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import styles from './Header.module.scss';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';
import Logo from '@images/Header/mc_autometal_logo.png';
import Hamburger from 'hamburger-react';
import { HeaderProps } from './types';

function Header({ homeTitle, contactTitle, productionTitle, aboutUsTitle }: HeaderProps) {
    const [isOpen, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const pathname = usePathname();

    const handleCLose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = scrollPosition > currentScrollPos;
            setScrollPosition(currentScrollPos);
            setIsVisible(visible);

            if (!visible && isOpen) {
                handleCLose();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition, isOpen]);

    return (
        <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.headerContainer}>
                <Link href={'/'}>
                    <Image src={Logo} width={68} height={75} alt='Mc_Autometal' />
                </Link>
                <nav className={isOpen ? styles.isOpen : styles.isClosed}>
                    <Link className={`${pathname === '/' ? `${styles.active}` : ''}`} href={'/'} onClick={handleCLose}>
                        {homeTitle}
                    </Link>
                    <Link
                        className={`${pathname === '/o-nama' ? `${styles.active}` : ''}`}
                        href={'/o-nama'}
                        onClick={handleCLose}
                    >
                        {aboutUsTitle}
                    </Link>
                    <Link
                        className={`${pathname === '/proizvodnja' ? `${styles.active}` : ''}`}
                        href={'/proizvodnja'}
                        onClick={handleCLose}
                    >
                        {productionTitle}
                    </Link>

                    <Link
                        className={`${pathname === '/kontakt' ? `${styles.active}` : ''}`}
                        href={'/kontakt'}
                        onClick={handleCLose}
                    >
                        {contactTitle}
                    </Link>
                    <LanguageSelector />
                </nav>
                <div className={styles.hamburgerWrapper}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
        </header>
    );
}

export default Header;
