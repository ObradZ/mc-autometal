import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroImg from '@images/Homepage/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';
import { circleData, data } from './content';
import CirclePointsSection from '@/components/CirclePointsSection';
import CncLaserInfo from '@/components/CncLaserInfo';
import SliderSection from '@/components/SliderSection';
import HeroSecondSection from '@/components/HeroSecondSection';
// Slider images
import AboutImg from '@images/AboutUs/Hero.jpg';
import ContactImg from '@images/Contact/Hero.jpg';
import HomepageImg from '@images/Homepage/Hero.jpg';
import Image from 'next/image';

const slides = [
    <Image src={AboutImg} alt='about us' key={1} />,
    <Image src={ContactImg} alt='contact' key={2} />,
    <Image src={HomepageImg} alt='homepage' key={3} />
];

const Page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                isLearnMoreVisible={false}
                title='CNC Laser'
                countUpData={data}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <VideoSection videoUrl='https://www.youtube.com/watch?v=nziA33FrhoI' />
            <CncLaserInfo />
            <CirclePointsSection data={circleData} title='Lorem Ipsum' subTitle='Lorem Ipsum' areImagesSvgs={false} />
            <SliderSection slides={slides} />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
