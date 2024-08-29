import Contact from '@/components/Contact';
import HeroSection from '@/components/HeroSection';
import MapComponent from '@/components/Map';
import HeroImg from '@images/Contact/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroSecondSection from '@/components/HeroSecondSection';

const page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                title='Kontakt'
                text='Biće nam zadovoljstvo da u što kraćem vremenskom roku odgovorimo i na Vaš zahtjev!'
            />
            <Contact />

            <MapComponent />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default page;
