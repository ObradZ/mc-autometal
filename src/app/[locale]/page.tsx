import AboutUsSection from '@/components/AboutUsSection';
import HeroSection from '@/components/HeroSection';
import { content } from '@/components/AboutUsSection/content';
import HeroImg from '@images/Homepage/Hero.jpg';
import AboutUsSectionImg from '@images/AboutUs/AboutUsSectionImg.jpg';


export default function Home() {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                title='Lorem Ipsum'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <AboutUsSection imageSrc={AboutUsSectionImg} title={content.title} subtitle={content.subtitle} text={content.text} />
        </main>
    );
}
