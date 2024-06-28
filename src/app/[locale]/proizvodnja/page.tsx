import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import HeroImg from '@images/Homepage/Hero.jpg';

const data = [
    { number: 45, property: 'celik', id: 0 },
    { property: 'divider', number: 0, id: 1 },
    { number: 35, property: 'nerdjajuci celik', id: 2 },
    { property: 'divider', number: 0, id: 3 },
    { number: 40, property: 'aluminijum', id: 4 },
    { property: 'divider', number: 0, id: 5 },
    { number: 45, property: 'brozna', id: 6 }
];

const page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                isLearnMoreVisible={false}
                title='CNC Laser'
                countUpData={data}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <VideoSection />
        </main>
    );
};

export default page;
