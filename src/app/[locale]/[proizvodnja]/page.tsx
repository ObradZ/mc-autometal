import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroImg from '@images/Homepage/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';
import { circleData, data } from './content';
import CirclePointsSection from '@/components/CirclePointsSection';

const page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                isLearnMoreVisible={false}
                title='CNC Laser'
                countUpData={data}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <VideoSection />
            <CirclePointsSection data={circleData} title='Lorem Ipsum' subTitle='Lorem Ipsum' areImagesSvgs={false} />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
        </main>
    );
};

export default page;
