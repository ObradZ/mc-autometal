import React from 'react';
import styles from './Contact.module.scss';
import SectionWrapper from '../SectionWrapper';
import { content } from './content';
import EmailIcon from '@images/Contact/email.svg';
import AddressIcon from '@images/Contact/address.svg';
import TelephoneIcon from '@images/Contact/telephone.svg';
import SocialIcon from '@images/Footer/social_icon.svg';
import AttachmentIcon from '@images/Contact/attachment.svg';

import Image, { StaticImageData } from 'next/image';
import MainHeading from '../MainHeading';
const Contact = () => {
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
                <MainHeading title='Lorem ipsum' subtitle='Kontakt' />
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
                        <div className={styles.nameAndEmailWrapper}>
                            <input type='text' className={styles.inputField} placeholder='Ime kompanije' />
                            <input type='email' className={styles.inputField} placeholder='E-mail' />
                        </div>
                        <textarea
                            placeholder='Poruka'
                            name='message'
                            id='message'
                            className={styles.message}
                            rows={12}
                            cols={10}
                        ></textarea>
                        <p className={styles.attachment}>
                            <Image src={AttachmentIcon} alt='attachment-icon'></Image>{' '}
                            <input type='file' className={styles.attachButton} />
                        </p>
                        <button className={styles.sendButton}>Pošalji &rarr;</button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
