import HeroSecondSection from '@/components/HeroSecondSection';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import VideoSection from '@/components/VideoSection';
import React from 'react';
import Struganje from '@images/MachineCenter/glodanje.jpg';
import { data } from './content';

const Page = () => {
    return (
        <main>
            <HeroSection
                image={Struganje}
                isLearnMoreVisible={false}
                title='Struganje'
                countUpData={data}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <VideoSection videoUrl='https://www.youtube.com/watch?v=nziA33FrhoI' />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
