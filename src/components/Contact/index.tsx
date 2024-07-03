'use client';
import React, { useState } from 'react';
import styles from './Contact.module.scss';
import SectionWrapper from '../SectionWrapper';
import { content } from './content';
import EmailIcon from '@images/Contact/email.svg';
import AddressIcon from '@images/Contact/address.svg';
import TelephoneIcon from '@images/Contact/telephone.svg';
import SocialIcon from '@images/Footer/social_icon.svg';
import Image, { StaticImageData } from 'next/image';
import MainHeading from '../MainHeading';

const Contact = () => {
    const [body, setBody] = useState({ companyName: '', message: '' });

    const handleInputChange = (e: any) => {
        setBody({ ...body, [e.target.name]: e.target.value });
    };

    const rendersection = (title: string, section: string, icon: StaticImageData) => {
        const sectionToRender = content[section as keyof typeof content];

        return (
            <div className={styles.contactDetailsSection}>
                <h3 className={styles.contactDetailsSectionHeading}>
                    <Image src={icon} alt={`${title}-icon`}></Image> {title}
                </h3>
                {sectionToRender.map((item) =>
                    section === 'address' ? (
                        <p key={item.id} className={styles.item}>
                            {item.label}
                        </p>
                    ) : (
                        <a
                            key={item.id}
                            href={section === 'telephone' ? `tel:${item.value}` : `mailto:${item.value}`}
                            className={styles.itemLink}
                        >
                            {item.label}
                        </a>
                    )
                )}
            </div>
        );
    };

    return (
        <SectionWrapper>
            <div className={styles.contactWrapper}>
                <MainHeading
                    superStyles={styles.contactMainHeading}
                    shade='dark'
                    title='Lorem ipsum'
                    subtitle='Kontakt'
                />
                <div className={styles.contactContainer}>
                    <div className={styles.contactDetails}>
                        {rendersection('Adresa', 'address', AddressIcon)}
                        {rendersection('Email', 'email', EmailIcon)}
                        {rendersection('Telefon', 'telephone', TelephoneIcon)}
                        <h3 className={styles.contactDetailsSectionHeading}>
                            Društvene mreže{' '}
                            <span>
                                {' '}
                                <Image className={styles.socialIcon} src={SocialIcon} alt='instagram-icon'></Image>{' '}
                            </span>{' '}
                        </h3>
                    </div>
                    <div className={styles.contactForm}>
                        <input
                            type='text'
                            className={styles.inputField}
                            name='companyName'
                            placeholder='Ime kompanije'
                            onChange={handleInputChange}
                            value={body.companyName}
                        />

                        <textarea
                            placeholder='Poruka'
                            name='message'
                            id='message'
                            className={styles.message}
                            rows={12}
                            cols={10}
                            value={body.message}
                            onChange={handleInputChange}
                        ></textarea>

                        <a
                            className={styles.sendLink}
                            href={`mailto:info@mcautometal.com?subject=${body.companyName}&body=${body.message}`}
                        >
                            Pošalji &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
