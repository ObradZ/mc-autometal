import Image from 'next/image';
import HeroImage from '../../../public/static/images/HeroSecondSection/hero-second-img-min.jpg';
import GearImage from '../../../public/static/images/HeroSecondSection/gear.png';
import HalfGearImage from '../../../public/static/images/HeroSecondSection/halfGear.png';
import styles from './HeroSecondSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import MainHeading from '../MainHeading';
import MainLink from '../MainLink';
import { useTranslations } from 'next-intl';

const HeroSecondSection = () => {
    const t = useTranslations('Hero_second_section');
    return (
        <div className={styles.wrapper}>
            <Image className={styles.heroImage} src={HeroImage} alt='Banner' />
            <SectionWrapper superStyles={styles.sectionStyles}>
                <div className={styles.contentWrapper}>
                    <Image src={HalfGearImage} alt='Half Gear' className={styles.gearImage1} />
                    <MainHeading title={'Lorem ipsum'} subtitle={t('contact')} shade='light' />
                    <p className={styles.text}>{t('text')}</p>
                    <MainLink href='/kontakt' superStyles={styles.link} shade='light'>
                        {t('contact_us')} →
                    </MainLink>
                    <Image src={GearImage} alt='Gear' className={styles.gearImage2} />
                </div>
            </SectionWrapper>
        </div>
    );
};

export default HeroSecondSection;
