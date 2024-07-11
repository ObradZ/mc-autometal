import HeroSection from '@/components/HeroSection';
import React from 'react';
import MasinskiCentar from '@images/MachineCenter/masinski_centar.jpg';
import { data } from './content';
import VideoSection from '@/components/VideoSection';
import SliderSection from '@/components/SliderSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';
import Image from 'next/image';
import AboutImg from '@images/AboutUs/Hero.jpg';
import ContactImg from '@images/Contact/Hero.jpg';
import HomepageImg from '@images/Homepage/Hero.jpg';
const slides = [
    <Image src={AboutImg} alt='about us' key={1} />,
    <Image src={ContactImg} alt='contact' key={2} />,
    <Image src={HomepageImg} alt='homepage' key={3} />
];
const index = () => {
    return (
        <div>
            <HeroSection
                image={MasinskiCentar}
                isLearnMoreVisible={false}
                countUpData={data}
                title='Mašinski centar'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <VideoSection videoUrl='https://www.youtube.com/watch?v=nziA33FrhoI' />
            <SliderSection slides={slides} />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
            <HeroSecondSection />
        </div>
    );
};

export default index;
