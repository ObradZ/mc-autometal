import React from 'react';
import styles from './Footer.module.scss';
import SectionWrapper from '../SectionWrapper';
import SocialIcon from '@images/Footer/social_icon.svg';
import Logo from '@images/Header/mc_autometal_logo.png';
import Image from 'next/image';
const index = () => {
    return (
        <div className={styles.footerContainer}>
            <SectionWrapper>
                <div className={styles.footerTop}>
                    <div className={styles.footerSubsection}>
                        <Image src={Logo} alt='mc-autometal-logo' width={68} height={75}></Image>
                        <div className={styles.footerHeading}>
                            <h2 className={styles.headingTop}>
                                <span className={styles.headingTopSubstring}>MC</span>AUTOMETAL
                            </h2>
                            <p className={styles.headingBottom}>mašinski centar</p>
                        </div>
                    </div>
                    <div className={styles.footerSubsection}>
                        <h4 className={styles.footerSubheading}>Adresa</h4>
                        <p className={styles.footerItemRow}>D.O.O MC AUTOMETAL</p>
                        <p className={styles.footerItemRow}>Ul. Ive Andrića BB,</p>
                        <p className={styles.footerItemRow}>73240 Višegrad,</p>
                        <p className={styles.footerItemRow}>Republika Srpska / Bosna i Hercegovina</p>
                        <div className={styles.socialNetwork}>
                            <h4 className={styles.footerSubheading}>Društvene mreže</h4>
                            <Image src={SocialIcon} alt='instagram-icon'></Image>
                        </div>
                    </div>

                    <div className={styles.footerSubsection}>
                        <h4 className={styles.footerSubheading}>Email</h4>
                        <p className={styles.footerItemRow}>
                            <a className={styles.footerLink} href='mailto:info@mcautometal.com'>
                                info@mcautometal.com
                            </a>
                        </p>
                        <br />
                        <h4 className={styles.footerSubheading}>Telefon</h4>
                        <p className={styles.footerItemRow}>
                            <a className={styles.footerLink} href='tel:+38758621300'>
                                +387 (0)58621300 - tel / faks
                            </a>
                        </p>
                        <p className={styles.footerItemRow}>
                            <a className={styles.footerLink} href='tel:+38765588693'>
                                +387 (0)65588693 - Petar
                            </a>
                        </p>
                        <p className={styles.footerItemRow}>
                            <a className={styles.footerLink} href='tel:+38765171711'>
                                +387 (0)65171711 - Milan
                            </a>
                        </p>
                    </div>
                </div>
            </SectionWrapper>
            <div className={styles.footerBottom}>All rights reserved &copy; 2024 MC Autometal</div>
        </div>
    );
};

export default index;
