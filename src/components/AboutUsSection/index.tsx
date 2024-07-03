import Image, { StaticImageData } from 'next/image';
import styles from './AboutUsSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import MainLink from '../MainLink';

interface AboutSectionProps {
    imageSrc: StaticImageData;
    title: string;
    subtitle: string;
    text: string;
}

const AboutUsSection = ({ imageSrc, title, subtitle, text }: AboutSectionProps) => {
    return (
        <SectionWrapper>
            <div className={styles.aboutSection}>
                <div className={styles.innerWrapper}>
                    <div className={styles.innerTextWrapper}>
                        <h2 className={styles.subtitle}>{subtitle}</h2>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.text}>{text}</p>
                    </div>
                    <div className={styles.imageContent}>
                        <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' />
                    </div>
                </div>
                <MainLink href='/o-nama' superStyles={styles.link} shade='dark'>
                    O nama →
                </MainLink>
            </div>
        </SectionWrapper>
    );
};

export default AboutUsSection;
