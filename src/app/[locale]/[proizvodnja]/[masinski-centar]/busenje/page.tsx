import HeroSecondSection from '@/components/HeroSecondSection';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import VideoSection from '@/components/VideoSection';
import React from 'react';
import Busenje from '@images/MachineCenter/busenje.jpg';

const Page = () => {
    return (
        <main>
            <HeroSection
                image={Busenje}
                isLearnMoreVisible={false}
                title='Bušenje'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=nziA33FrhoI'
                videoText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
