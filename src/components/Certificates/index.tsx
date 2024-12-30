import Image, { StaticImageData } from 'next/image';
import styles from './Certificates.module.scss';
import SectionWrapper from '../SectionWrapper';
import MainHeading from '../MainHeading';
import EmblaCarousel from '../EmblaCarousel';

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
        <SectionWrapper>
            <div className={styles.certificatesSection}>
                <div className={styles.certificatesTextWrapper}>
                    <MainHeading title={title} subtitle={subtitle} shade='dark' />
                    <p className={styles.text}>{text}</p>
                </div>
                <div className={styles.imagesWrapper}>
                    <div className={styles.imageContent}>
                        <EmblaCarousel
                            options={{ loop: true, slidesToScroll: 1 }}
                            slides={slides}
                            enableDotsButtons={false}
                        />
                    </div>
                    <div className={styles.imageContentMobileSlider}>
                        <EmblaCarousel options={{ loop: true }} slides={slides} enableDotsButtons={false} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certificates;
