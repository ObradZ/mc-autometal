import React from 'react';
import Image from 'next/image';
import styles from './ProductionGridSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import Rectangle from '../../../public/static/images/ProductionGridSection/Rectangle.png';
import MainHeading from '../MainHeading';
import MainLink from '../MainLink';
import { useTranslations } from 'next-intl';

interface ProductionGridSectionProps {
    title: string;
    subtitle: string;
    images: Function;
}

const ProductionGridSection = ({ title, subtitle, images }: ProductionGridSectionProps) => {
    const t = useTranslations('Production_grid_section');
    return (
        <SectionWrapper>
            <div className={styles.container}>
                <MainHeading title={title} subtitle={subtitle} shade='dark' />
                <div className={styles.grid}>
                    {images(t).map((image: any, index: number) => (
                        <div key={index} className={styles.gridItem}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={200}
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.overlayContent}>
                                        <p className={styles.overlayText}>{image.text}</p>
                                        <MainLink href='#' superStyles={styles.overlayButton} shade='light'>
                                            {t('find_out_more')} →
                                        </MainLink>
                                    </div>
                                </div>
                                <Image className={styles.rectangleImg} src={Rectangle} alt='rectangle' />
                                <p className={styles.imageCaption}>{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ProductionGridSection;
