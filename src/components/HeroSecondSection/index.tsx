import Image from 'next/image';
import HeroImage from '../../../public/static/images/HeroSecondSection/hero-second-img-min.jpg';
import GearImage from '../../../public/static/images/HeroSecondSection/gear.png';
import HalfGearImage from '../../../public/static/images/HeroSecondSection/halfGear.png';
import styles from './HeroSecondSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import MainHeading from '../MainHeading';
import { content } from './content';
import MainLink from '../MainLink';

const HeroSecondSection = () => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.heroImage} src={HeroImage} alt='Banner' />
            <SectionWrapper superStyles={styles.sectionStyles}>
                <div className={styles.contentWrapper}>
                    <Image src={HalfGearImage} alt='Half Gear' className={styles.gearImage1} />
                    <MainHeading title={content.title} subtitle={content.subtitle} shade='light' />
                    <p className={styles.text}>{content.text}</p>
                    <MainLink href='/kontakt' superStyles={styles.link} shade='light'>
                        Kontaktiraj nas →
                    </MainLink>
                    <Image src={GearImage} alt='Gear' className={styles.gearImage2} />
                </div>
            </SectionWrapper>
        </div>
    );
};

export default HeroSecondSection;
