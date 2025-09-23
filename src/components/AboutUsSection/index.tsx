import styles from './AboutUsSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import { useTranslations } from 'next-intl';
import VideoSection from '../VideoSection';

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
                    aboutUsText={t('about_us')}
                    superStyles={styles.wrapperSuperStyles}
                />
            </div>
        </SectionWrapper>
    );
};

export default AboutUsSection;
