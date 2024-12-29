'use client';
import React, { useState } from 'react';
import styles from './Contact.module.scss';
import SectionWrapper from '../SectionWrapper';
import { content } from './content';
import EmailIcon from '@images/Contact/email.svg';
import AddressIcon from '@images/Contact/address.svg';
import TelephoneIcon from '@images/Contact/telephone.svg';
import Instagram from '@images/Footer/instagram.svg';
import Youtube from '@images/Footer/youtube.svg';
import Linkedin from '@images/Footer/linkedin.svg';
import Image, { StaticImageData } from 'next/image';
import MainHeading from '../MainHeading';

const Contact = ({
    address,
    email,
    telephone,
    socialNetworks,
    send,
    nameOfTheCompany,
    message,
    title
}: {
    address: string;
    email: string;
    telephone: string;
    socialNetworks: string;
    send: string;
    nameOfTheCompany: string;
    message: string;
    title: string;
}) => {
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
                <MainHeading superStyles={styles.contactMainHeading} shade='dark' title={title} />
                <div className={styles.contactContainer}>
                    <div className={styles.contactDetails}>
                        {rendersection(address, 'address', AddressIcon)}
                        {rendersection(email, 'email', EmailIcon)}
                        {rendersection(telephone, 'telephone', TelephoneIcon)}
                        <h3 className={styles.contactDetailsSectionHeading}>
                            <div className={styles.networksContainer}>
                                {socialNetworks}

                                <span>
                                    <Image
                                        className={styles.socialIcon}
                                        src={Instagram}
                                        alt='instagram-icon'
                                        onClick={() => window.open('https://www.instagram.com/mc_autometal/')}
                                    ></Image>{' '}
                                </span>
                                <span>
                                    <Image
                                        className={styles.socialIcon}
                                        src={Youtube}
                                        alt='youtube-icon'
                                        onClick={() =>
                                            window.open('https://www.youtube.com/channel/UCk6otWTBegF9RC4gwH9I93Q')
                                        }
                                    ></Image>{' '}
                                </span>
                                <span>
                                    <Image
                                        className={styles.socialIcon}
                                        src={Linkedin}
                                        alt='linkedin-icon'
                                        onClick={() => window.open('https://www.linkedin.com/company/105171911')}
                                    ></Image>{' '}
                                </span>
                            </div>
                        </h3>
                    </div>
                    <div className={styles.contactForm}>
                        <input
                            type='text'
                            className={styles.inputField}
                            name='companyName'
                            placeholder={nameOfTheCompany}
                            onChange={handleInputChange}
                            value={body.companyName}
                        />

                        <textarea
                            placeholder={message}
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
                            {send} &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
