'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './Certificates.module.scss';
import SectionWrapper from '../SectionWrapper';
import MainHeading from '../MainHeading';
import EmblaCarousel from '../EmblaCarousel';

type CertificatesProps = {
    title: string;
    subtitle?: string;
    text: string;
    certificate1: StaticImageData;
    certificate2: StaticImageData;
};

const Certificates = ({ title, subtitle, text, certificate1, certificate2 }: CertificatesProps) => {
    const slides = [
        <Image src={certificate1} alt='Certificate1' key='1' />,
        <Image src={certificate2} alt='Certificate2' key='2' />
    ];

    return (
        <SectionWrapper>
            <div className={styles.certificatesSection}>
                <div className={styles.certificatesTextWrapper}>
                    <MainHeading title={title} subtitle={subtitle} shade='dark' />
                    <p className={styles.text}>{text}</p>
                </div>
                <div className={styles.imagesWrapper}>
                    <div className={styles.imageContent}>
                        <Image src={certificate1} alt='Certificate1' className={styles.certificateImage} />
                        <Image src={certificate2} alt='Certificate2' className={styles.certificateImage} />
                    </div>
                    <div className={styles.imageContentMobileSlider}>
                        <EmblaCarousel options={{ loop: true }} slides={slides} enableDotsButtons={false} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certificates;
