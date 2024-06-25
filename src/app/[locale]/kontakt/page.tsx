import Contact from '@/components/Contact';
import HeroSection from '@/components/HeroSection';
import HeroImg from '@images/Contact/Hero.jpg';

const page = () => {
    return (
        <main>
            <HeroSection image={HeroImg} />
            <Contact />
        </main>
    );
};

export default page;
