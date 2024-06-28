import Cooperands from '@/components/Cooperands';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroImg from '@images/AboutUs/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';
import Certificates from '@/components/Certificates';
import { content } from '@/components/Certificates/content';

const page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                title='About Us'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <Certificates
                title={content.title}
                subtitle={content.subtitle}
                text={content.text}
                certificate1={content.certificates.certificate1}
                certificate2={content.certificates.certificate2}
            />
            <Cooperands />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
        </main>
    );
};

export default page;
