import HeroSection from '@/components/HeroSection';
import React from 'react';
import MasinskiCentar from '@images/MachineCenter/masinski_centar.jpg';
import { data } from './content';
import VideoSection from '@/components/VideoSection';
import SliderSection from '@/components/SliderSection';
import { slides } from '../cnc-laser/page';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';
const index = () => {
    return (
        <div>
            <HeroSection
                image={MasinskiCentar}
                isLearnMoreVisible={false}
                countUpData={data}
                title='Glodanje'
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
