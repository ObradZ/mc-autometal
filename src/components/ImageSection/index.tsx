import React from 'react';
import SectionWrapper from '../SectionWrapper';
import styles from './ImageSection.module.scss';
import MainHeading from '../MainHeading';
import Image, { StaticImageData } from 'next/image';
import GearLeft from '../../../public/static/images/Gears/Vector-left.svg';

const ImageSection = ({
    imageUrl,
    imageText,
    imageTitle
}: {
    imageUrl: StaticImageData;
    imageText: string;
    imageTitle?: string;
}) => {
    return (
        <SectionWrapper superStyles={styles.imageSection}>
            <div className={styles.imageSectionWrapper}>
                <div className={styles.imageSectionContent}>
                    <MainHeading title={imageTitle || ''} shade='dark' />
                    <p className={styles.imageSectionParagraph}>{imageText}</p>
                </div>
                <div className={styles.imageSectionImageWrapper}>
                    <Image src={imageUrl} alt='' />
                    <Image src={GearLeft} alt='gear' className={styles.gearLeft} />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ImageSection;
