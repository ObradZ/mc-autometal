import Image from 'next/image';
import styles from './AboutUsSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import MainLink from '../MainLink';
import GearLeft from '../../../public/static/images/Gears/Vector-left.svg';
import GearRight from '../../../public/static/images/Gears/Vector-right.svg';
import { useTranslations } from 'next-intl';
import VideoSection from '../VideoSection';
import ReactPlayer from 'react-player';
interface AboutSectionProps {
    title: string;
    subtitle?: string;
    text: string;
}

const AboutUsSection = ({ title, subtitle, text }: AboutSectionProps) => {
    const t = useTranslations('About_us_section');

    return (
        <SectionWrapper>
            <div className={styles.aboutSection}>
                <VideoSection
                    videoTitle={title}
                    videoUrl='https://www.youtube.com/watch?v=wTauEVgfcDw'
                    videoText={text}
                    videoSubtitle={subtitle}
                />
                <MainLink href='/o-nama' superStyles={styles.link} shade='dark'>
                    {t('about_us')} →
                </MainLink>
            </div>
        </SectionWrapper>
    );
};

export default AboutUsSection;
