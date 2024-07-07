import HeroSection from '@/components/HeroSection';
import React from 'react';
import PlasticDeformation from '@images/PlasticDeformation/plasticDeformation.jpg';
import VideoSection from '@/components/VideoSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';

const Page = () => {
    return (
        <main>
            <HeroSection
                image={PlasticDeformation}
                isLearnMoreVisible={false}
                title='Plastično deformisanje'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <VideoSection videoUrl='https://www.youtube.com/watch?v=nziA33FrhoI' />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
