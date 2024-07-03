import Image from 'next/image';
import styles from './LearnMoreHeroPart.module.scss';
import EngineImg from '@images/Homepage/engine.png';
import MainLink from '@/components/MainLink';
import EmblaCarousel from '@/components/EmblaCarousel';
import { sliderData } from './content';

const LearnMoreHeroPart = () => {
    return (
        <div>
            <div className={styles.slider}>
                {sliderData.map((item) => (
                    <div key={item.title} className={styles.sliderItemWrapper}>
                        <Image className={styles.sliderImg} src={EngineImg} alt='engine' />
                        <p className={styles.sliderTitle}>{item.title}</p>
                        <p className={styles.sliderText}>{item.text}</p>
                        <MainLink href='/o-nama' shade='light'>
                            Saznaj više →
                        </MainLink>
                    </div>
                ))}
            </div>
            <div className={styles.mobileSlider}>
                <EmblaCarousel
                    enableArrowButtons={false}
                    slides={sliderData.map((item) => (
                        <div key={item.title} className={styles.sliderItemWrapper}>
                            <Image className={styles.sliderImg} src={EngineImg} alt='engine' />
                            <p className={styles.sliderTitle}>{item.title}</p>
                            <p className={styles.sliderText}>{item.text}</p>
                            <MainLink href='/o-nama' shade='light'>
                                Saznaj više →
                            </MainLink>
                        </div>
                    ))}
                />
            </div>
        </div>
    );
};

export default LearnMoreHeroPart;
