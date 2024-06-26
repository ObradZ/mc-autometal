import Image, { StaticImageData } from 'next/image';
import styles from './AboutUsSection.module.scss';
import { Link } from '@/navigation';
import SectionWrapper from '../SectionWrapper';
import Vector from '@images/AboutUs/Vector.svg';

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
                        <Image className={styles.firstVector} src={Vector} alt={'vector'} />
                    </div>
                </div>
                <Link href='/o-nama' className={styles.link}>
                    O nama →
                </Link>
            </div>
        </SectionWrapper>
    );
};

export default AboutUsSection;
