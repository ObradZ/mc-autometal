import Contact from '@/components/Contact';
import HeroSection from '@/components/HeroSection';
import MapComponent from '@/components/Map';
import SectionWrapper from '@/components/SectionWrapper';
import HeroImg from '@images/Contact/Hero.jpg';
import styles from './Contact.module.scss';
import { images } from '@/components/ProductionGridSection/content';
import ProductionGridSection from '@/components/ProductionGridSection';

const page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                title='Lorem Ipsum'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <Contact />

            <MapComponent />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
        </main>
    );
};

export default page;
