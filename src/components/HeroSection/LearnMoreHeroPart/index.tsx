import Image from 'next/image';
import styles from './LearnMoreHeroPart.module.scss';
import EngineImg from '@images/Homepage/engine.png';
import MainLink from '@/components/MainLink';
import EmblaCarousel from '@/components/EmblaCarousel';
import { sliderData } from './content';
import { useTranslations } from 'next-intl';

const LearnMoreHeroPart = () => {
    const t = useTranslations('Learn_more_hero_part');
    return (
        <div>
            <div className={styles.slider}>
                {sliderData(t).map((item) => (
                    <div key={item.title} className={styles.sliderItemWrapper}>
                        <Image className={styles.sliderImg} src={EngineImg} alt='engine' />
                        <p className={styles.sliderTitle}>{item.title}</p>
                        <p className={styles.sliderText}>{item.text}</p>
                        <MainLink href={item.href} shade='light'>
                            {t('find_out_more')} →
                        </MainLink>
                    </div>
                ))}
            </div>
            <div className={styles.mobileSlider}>
                <EmblaCarousel
                    enableArrowButtons={false}
                    slides={sliderData(t).map((item) => (
                        <div key={item.title} className={styles.sliderItemWrapper}>
                            <Image className={styles.sliderImg} src={EngineImg} alt='engine' />
                            <p className={styles.sliderTitle}>{item.title}</p>
                            <p className={styles.sliderText}>{item.text}</p>
                            <MainLink href={item.href} shade='light'>
                                {t('find_out_more')} →
                            </MainLink>
                        </div>
                    ))}
                />
            </div>
        </div>
    );
};

export default LearnMoreHeroPart;
