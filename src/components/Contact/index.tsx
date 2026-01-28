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
import SocialIcon from '../SocialIcon';

type ContactItem = {
    id: string | number;
    label?: string;
    value?: string;
};

const Contact = ({
    address,
    email,
    telephone,
    socialNetworks,
    send,
    nameOfTheCompany,
    message,
    title,
    labelDirector,
    labelOwner,
    labelTelFax
}: {
    address: string;
    email: string;
    telephone: string;
    socialNetworks: string;
    send: string;
    nameOfTheCompany: string;
    message: string;
    title: string;
    labelDirector: string;
    labelOwner: string;
    labelTelFax: string;
}) => {
    const [body, setBody] = useState({ companyName: '', message: '' });

    const handleInputChange = (e: any) => {
        setBody({ ...body, [e.target.name]: e.target.value });
    };

    const rendersection = (
        title: string,
        section: 'address' | 'email' | 'telephone',
        icon: StaticImageData,
        itemsOverride?: ContactItem[]
    ) => {
        const sectionToRender = (itemsOverride ??
            (content[section as keyof typeof content] as ContactItem[])) as ContactItem[];

        return (
            <div className={styles.contactDetailsSection}>
                <h3 className={styles.contactDetailsSectionHeading}>
                    <Image src={icon} alt={`${title}-icon`} /> {title}
                </h3>

                {sectionToRender.map((item) =>
                    section === 'address' ? (
                        <p key={item.id} className={styles.item}>
                            {item.label}
                        </p>
                    ) : (
                        <a
                            key={item.id}
                            href={
                                section === 'telephone'
                                    ? `tel:${item.value ?? item.label}`
                                    : `mailto:${item.value ?? item.label}`
                            }
                            className={styles.itemLink}
                        >
                            {item.label}
                        </a>
                    )
                )}
            </div>
        );
    };

    const telephoneItems: ContactItem[] = [
        { id: 'director', label: labelDirector, value: '+38765171711' },
        { id: 'owner', label: labelOwner, value: '+38765588693' },
        { id: 'telfax', label: labelTelFax, value: '+38758621300' }
    ];

    return (
        <SectionWrapper>
            <div className={styles.contactWrapper}>
                <MainHeading superStyles={styles.contactMainHeading} shade='dark' title={title} />
                <div className={styles.contactContainer}>
                    <div className={styles.contactDetails}>
                        {rendersection(address, 'address', AddressIcon)}
                        {rendersection(email, 'email', EmailIcon)}
                        {rendersection(telephone, 'telephone', TelephoneIcon, telephoneItems)}

                        <h3 className={styles.contactDetailsSectionHeading}>
                            <div className={styles.networksContainer}>
                                {socialNetworks}
                                <SocialIcon
                                    className={styles.socialIcon}
                                    image={Instagram}
                                    link='https://www.instagram.com/mc_autometal/'
                                />
                                <SocialIcon
                                    className={styles.socialIcon}
                                    image={Youtube}
                                    link='https://www.youtube.com/channel/UCk6otWTBegF9RC4gwH9I93Q'
                                />
                                <SocialIcon
                                    className={styles.socialIcon}
                                    image={Linkedin}
                                    link='https://www.linkedin.com/company/105171911'
                                />
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
