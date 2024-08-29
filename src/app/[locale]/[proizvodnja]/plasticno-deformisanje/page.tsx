import HeroSection from '@/components/HeroSection';
import React from 'react';
import PlasticDeformation from '@images/PlasticDeformation/plasticDeformation.jpg';
import VideoSection from '@/components/VideoSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';

const Page = () => {
    return (
        <main>
            <HeroSection
                image={PlasticDeformation}
                isLearnMoreVisible={false}
                title='Plastično deformisanje'
                text='Naša kompanija je opremljena tehnologijama plastičnog deformisanja koje nam omogućavaju širok spektar mogućnosti u proizvodnji. Posedujemo ekscentar i hidraulične apkant prese koje su ključne za savijanje metala u različitim oblicima i dimenzijama. '
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=nziA33FrhoI'
                videoText='Ove mašine su idealne kako za proizvodnju pojedinačnih komponenti, tako i za rad u velikim serijama, čime efikasno zadovoljavamo potrebe naših klijenata iz različitih industrija. Naša sposobnost da precizno i pouzdano oblikujemo metalne komponente pomoću ovih tehnologija čini nas partnerom po izboru za projekte koji zahtevaju visok nivo prilagođenosti i kvaliteta. '
            />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
