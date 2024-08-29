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
                text='Društvo za proizvodnju, usluge i trgovinu iz oblasti mašinstva d.o.o. MC AUTOMETAL posluje od 1999.godine sa sjedištem u Višegradu. Otkrijte više o našoj porodičnoj kompaniji i kako možemo unaprediti vaš poslovni svet. Budite deo našeg putovanja ka budućnosti u mašinskoj proizvodnji! '
            />
            <AboutUsSection title={content.title} subtitle={content.subtitle} text={content.text} />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
}
