import Image from 'next/image';
import { HeroSectionProps } from './types';
import styles from './HeroSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import { Link } from '@/navigation';
import EngineImg from '@images/Homepage/engine.png';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

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

const OPTIONS: EmblaOptionsType = {};

const HeroSection = ({ image }: HeroSectionProps) => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.heroImage} src={image} alt='Banner' />
            <SectionWrapper superStyles={styles.sectionStyles}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.title}>Lorem Ipsum</h1>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac
                        auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti.
                        Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet
                        eleifend odio pretium maximus.
                    </p>
                    <Link className={styles.learnMore} href='/o-nama'>
                        Saznaj više →
                    </Link>
                </div>
            </SectionWrapper>
            <div className={styles.slider}>
                {sliderData.map((item) => (
                    <div key={item.title} className={styles.sliderItemWrapper}>
                        <Image className={styles.sliderImg} src={EngineImg} alt='engine' />
                        <p className={styles.sliderTitle}>{item.title}</p>
                        <p className={styles.sliderText}>{item.text}</p>
                        <Link className={styles.learnMore} href={item.href}>
                            Saznaj više →
                        </Link>
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
                            <Link className={styles.learnMore} href={item.href}>
                                Saznaj više →
                            </Link>
                        </div>
                    ))}
                />
            </div>
        </div>
    );
};

export default HeroSection;
