import Contact from '@/components/Contact';
import HeroSection from '@/components/HeroSection';
import HeroImg from '@images/Contact/Hero.jpg';

const page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                title='Lorem Ipsum'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <Contact />
        </main>
    );
};

export default page;
