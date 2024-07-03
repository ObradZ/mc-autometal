'use client';

import React, { useState, useEffect } from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import styles from './Header.module.scss';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';
import Logo from '@images/Header/mc_autometal_logo.png';
import Hamburger from 'hamburger-react';
import { HeaderProps } from './types';
import MainLink from '../MainLink';

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
                <Link className={isOpen ? styles.headerLogoOpen : styles.headerLogoClosed} href={'/'}>
                    <Image src={Logo} width={68} height={75} alt='Mc_Autometal' />
                    <div className={styles.headerHeading}>
                        <h2 className={styles.headingTop}>
                            <span className={styles.headingTopSubstring}>MC</span>AUTOMETAL
                        </h2>
                        <p className={styles.headingBottom}>mašinski centar</p>
                    </div>
                </Link>
                <nav className={isOpen ? styles.isOpen : styles.isClosed}>
                    <MainLink
                        superStyles={`${pathname === '/' ? `${styles.active}` : ''}`}
                        href={'/'}
                        shade='light'
                        onClick={handleCLose}
                    >
                        {homeTitle}
                    </MainLink>
                    <MainLink
                        superStyles={`${pathname === '/o-nama' ? `${styles.active}` : ''}`}
                        href={'/o-nama'}
                        shade='light'
                        onClick={handleCLose}
                    >
                        {aboutUsTitle}
                    </MainLink>
                    <MainLink
                        superStyles={`${pathname === '/proizvodnja' ? `${styles.active}` : ''}`}
                        href={'/proizvodnja'}
                        shade='light'
                        onClick={handleCLose}
                    >
                        {productionTitle}
                    </MainLink>
                    <MainLink
                        superStyles={`${pathname === '/kontakt' ? `${styles.active}` : ''}`}
                        href={'/kontakt'}
                        shade='light'
                        onClick={handleCLose}
                    >
                        {contactTitle}
                    </MainLink>
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
