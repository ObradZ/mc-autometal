import EmblaCarousel from '../EmblaCarousel';
import { SliderSectionProps } from './types';
import AboutImg from '@images/AboutUs/Hero.jpg';
import ContactImg from '@images/Contact/Hero.jpg';
import HomepageImg from '@images/Homepage/Hero.jpg';
import Image from 'next/image';
const slides = [
    <Image src={AboutImg} alt='about us' key='1' />,
    <Image src={ContactImg} alt='contact' key='2' />,
    <Image src={HomepageImg} alt='homepage' key='2' />
];

const SliderSection = ({}: SliderSectionProps) => {
    return (
        <div>
            <EmblaCarousel options={{ loop: true }} slides={slides} />
        </div>
    );
};

export default SliderSection;
