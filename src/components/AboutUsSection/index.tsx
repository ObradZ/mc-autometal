import Image from 'next/image';
import styles from './AboutUsSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import MainLink from '../MainLink';
import GearLeft from '../../../public/static/images/Gears/Vector-left.svg';
import GearRight from '../../../public/static/images/Gears/Vector-right.svg';

interface AboutSectionProps {
    title: string;
    subtitle: string;
    text: string;
}

const AboutUsSection = ({ title, subtitle, text }: AboutSectionProps) => {
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
                        <Image src={GearLeft} alt='gear' className={styles.gearLeft} />
                        <Image src={GearRight} alt='gear' className={styles.gearRight} />
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
