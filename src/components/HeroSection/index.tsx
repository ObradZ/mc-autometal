import Image from 'next/image';
import { HeroSectionProps } from './types';
import styles from './HeroSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import { Link } from '@/navigation';
import LearnMoreHeroPart from './LearnMoreHeroPart';
import CountUpHeroPart from './CountUpHeroPart';

const HeroSection = ({ image, title, text, isLearnMoreVisible = true, countUpData }: HeroSectionProps) => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.heroImage} src={image} alt='Banner' />
            <SectionWrapper superStyles={styles.sectionStyles}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.text}>{text}</p>
                    <Link className={styles.learnMore} href='/o-nama'>
                        Saznaj više →
                    </Link>
                </div>
                {countUpData && <CountUpHeroPart data={countUpData} />}
            </SectionWrapper>
            {isLearnMoreVisible && <LearnMoreHeroPart />}
        </div>
    );
};

export default HeroSection;
