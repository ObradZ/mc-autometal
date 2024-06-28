import Cooperands from '@/components/Cooperands';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroImg from '@images/AboutUs/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';

const page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                title='About Us'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <Cooperands />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
        </main>
    );
};

export default page;
