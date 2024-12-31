import Image, { StaticImageData } from 'next/image';
import styles from './Certificates.module.scss';
import SectionWrapper from '../SectionWrapper';
import MainHeading from '../MainHeading';
import EmblaCarousel from '../EmblaCarousel';
import Slider from '../SliderSection/Slider';

type CertificatesProps = {
    title: string;
    subtitle?: string;
    text: string;
    certificate1: StaticImageData;
    certificate2: StaticImageData;
    certificate3: StaticImageData;
    certificate4: StaticImageData;
};

const Certificates = ({
    title,
    subtitle,
    text,
    certificate1,
    certificate2,
    certificate3,
    certificate4
}: CertificatesProps) => {
    const slides = [
        <Image src={certificate1} alt='Certificate1' key='1' />,
        <Image src={certificate2} alt='Certificate2' key='2' />,
        <Image src={certificate3} alt='Certificate3' key='3' />,
        <Image src={certificate4} alt='Certificate4' key='4' />
    ];

    return (
        <SectionWrapper superStyles={styles.superSectionStyles}>
            <div className={styles.certificatesSection}>
                <div className={styles.certificatesTextWrapper}>
                    <MainHeading title={title} subtitle={subtitle} shade='dark' />
                    <div className={styles.emblaTextWrapper}>
                        <div className={styles.textWrapper}>
                            <p className={styles.text}>{text}</p>
                        </div>
                        <div className={styles.emblaContainer}>
                            <Slider
                                viewPortStyles={styles.viewPortStyles}
                                options={{ loop: true, slidesToScroll: 2 }}
                                slides={slides}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.imagesWrapper}>
                    <div className={styles.imageContentMobileSlider}>
                        <EmblaCarousel
                            emblaViewport={styles.mobileViewPort}
                            options={{ loop: true }}
                            slides={slides}
                            enableArrowButtons
                            enableDotsButtons={false}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certificates;
