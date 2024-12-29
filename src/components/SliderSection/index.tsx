'use client';

import { SliderSectionProps } from './types';
import styles from './SliderSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import Slider from './Slider';
import MainHeading from '../MainHeading';
import Image from 'next/image';
// Slider images
import Swiper1 from '@images/Swiper/swiper1.jpg';
import Swiper2 from '@images/Swiper/swiper2.jpg';
import Swiper3 from '@images/Swiper/swiper3.jpg';
import Swiper4 from '@images/Swiper/swiper4.jpg';
import Swiper5 from '@images/Swiper/swiper5.jpg';
import Swiper6 from '@images/Swiper/swiper6.jpg';
import Swiper7 from '@images/Swiper/swiper7.jpg';
import Swiper8 from '@images/Swiper/swiper8.jpg';
import Swiper9 from '@images/Swiper/swiper9.jpg';
import Swiper10 from '@images/Swiper/swiper10.jpg';
import Swiper11 from '@images/Swiper/swiper11.jpg';
import Swiper12 from '@images/Swiper/swiper12.jpg';
import Swiper13 from '@images/Swiper/swiper13.jpg';
import Swiper14 from '@images/Swiper/swiper14.jpg';
import Swiper15 from '@images/Swiper/swiper15.jpg';
import Swiper16 from '@images/Swiper/swiper16.jpg';
import Swiper17 from '@images/Swiper/swiper17.jpg';

const images = [
    <Image src={Swiper1} alt='swiper image 1' key={1} />,
    <Image src={Swiper2} alt='swiper image 2' key={2} />,
    <Image src={Swiper3} alt='swiper image 3' key={3} />,
    <Image src={Swiper4} alt='swiper image 4' key={4} />,
    <Image src={Swiper5} alt='swiper image 5' key={5} />,
    <Image src={Swiper6} alt='swiper image 6' key={6} />,
    <Image src={Swiper7} alt='swiper image 7' key={7} />,
    <Image src={Swiper8} alt='swiper image 8' key={8} />,
    <Image src={Swiper9} alt='swiper image 9' key={9} />,
    <Image src={Swiper10} alt='swiper image 10' key={10} />,
    <Image src={Swiper11} alt='swiper image 11' key={11} />,
    <Image src={Swiper12} alt='swiper image 12' key={12} />,
    <Image src={Swiper13} alt='swiper image 13' key={13} />,
    <Image src={Swiper14} alt='swiper image 14' key={14} />,
    <Image src={Swiper15} alt='swiper image 15' key={15} />,
    <Image src={Swiper16} alt='swiper image 16' key={16} />,
    <Image src={Swiper17} alt='swiper image 17' key={17} />
];
const SliderSection = ({ slides, title, subtitle }: SliderSectionProps) => {
    return (
        <SectionWrapper superStyles={styles.superStyles}>
            {title && <MainHeading subtitle={subtitle} title={title} shade='dark' />}
            <div className={styles.wrapper}>
                <Slider options={{ loop: true, slidesToScroll: 'auto' }} slides={slides || images} />
            </div>
        </SectionWrapper>
    );
};

export default SliderSection;
