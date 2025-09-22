import Image from 'next/image';
import { HeroSectionProps } from './types';
import styles from './HeroSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import LearnMoreHeroPart from './LearnMoreHeroPart';
import CountUpHeroPart from './CountUpHeroPart';
import MainLink from '../MainLink';
import { useTranslations } from 'next-intl';
import HeroVideo from '../HeroVideo';

const HeroSection = ({
    image,
    title,
    text,
    videoSrc,
    isLearnMoreVisible = true,
    countUpData,
    heroImageStyles
}: HeroSectionProps) => {
    const t = useTranslations('Hero_section');
    return (
        <div className={styles.wrapper}>
            {image && (
                <>
                    <Image className={[styles.heroImage, heroImageStyles || ''].join(' ')} src={image} alt='Banner' priority fetchPriority='high' placeholder="blur" />
                    <div className={styles.imageOpacity}></div>
                </>
            )}
            {videoSrc && <HeroVideo src={videoSrc} />}
            <SectionWrapper superStyles={styles.sectionStyles}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.text}>{text}</p>
                    <MainLink href='/o-nama' shade='light'>
                        {t('find_out_more')} →
                    </MainLink>
                </div>
                {countUpData && <CountUpHeroPart data={countUpData} />}
            </SectionWrapper>
            {isLearnMoreVisible && <LearnMoreHeroPart />}
        </div>
    );
};

export default HeroSection;
