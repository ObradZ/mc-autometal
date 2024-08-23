import AboutUsSection from '@/components/AboutUsSection';
import HeroSection from '@/components/HeroSection';
import { content } from '@/components/AboutUsSection/content';
import HeroImg from '@images/Homepage/Hero.jpg';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';

export default function Home() {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                title='Lorem Ipsum'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <AboutUsSection title={content.title} subtitle={content.subtitle} text={content.text} />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
}
