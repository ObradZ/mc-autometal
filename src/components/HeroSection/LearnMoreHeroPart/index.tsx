import Image from 'next/image';
import styles from './LearnMoreHeroPart.module.scss';
import EngineImg from '@images/Homepage/engine.png';
import EmblaCarousel from '../EmblaCarousel';
import MainLink from '@/components/MainLink';

const sliderData = [
    {
        title: 'CNC Laser',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis in erat quis aliquam.',
        href: '/o-nama'
    },
    {
        title: 'Mašinski centar',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis in erat quis aliquam.',
        href: '/o-nama'
    },
    {
        title: 'Tehnologija plastičnog deformisanja',
        text: 'Savijanje, probijanje, prosjecanje, duboko izvlačenje u serijskoj proizvodnji.',
        href: '/o-nama'
    }
];

const LearnMoreHeroPart = () => {
    return (
        <div>
            <div className={styles.slider}>
                {sliderData.map((item) => (
                    <div key={item.title} className={styles.sliderItemWrapper}>
                        <Image className={styles.sliderImg} src={EngineImg} alt='engine' />
                        <p className={styles.sliderTitle}>{item.title}</p>
                        <p className={styles.sliderText}>{item.text}</p>
                        <MainLink href='/o-nama'>Saznaj više →</MainLink>
                    </div>
                ))}
            </div>
            <div className={styles.mobileSlider}>
                <EmblaCarousel
                    slides={sliderData.map((item) => (
                        <div key={item.title} className={styles.sliderItemWrapper}>
                            <Image className={styles.sliderImg} src={EngineImg} alt='engine' />
                            <p className={styles.sliderTitle}>{item.title}</p>
                            <p className={styles.sliderText}>{item.text}</p>
                            <MainLink href='/o-nama'>Saznaj više →</MainLink>
                        </div>
                    ))}
                />
            </div>
        </div>
    );
};

export default LearnMoreHeroPart;
