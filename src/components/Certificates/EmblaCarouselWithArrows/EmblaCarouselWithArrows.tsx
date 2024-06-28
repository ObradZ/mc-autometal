import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './EmblaCarouselWithArrows.module.scss';
import VectorLeft from '../../../../public/static/images/Certificates/Vector-left.svg';
import VectorRight from '../../../../public/static/images/Certificates/Vector-right.svg';

type EmblaCarouselProps = {
    slides: JSX.Element[];
};

const EmblaCarouselWithArrows = ({ slides }: EmblaCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((slide, index) => (
                        <div className={styles.embla__slide} key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <button
                className={`${styles.embla__button} ${styles.embla__button__prev}`}
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
            >
                <Image src={VectorLeft} alt='arrow left' />
            </button>
            <button
                className={`${styles.embla__button} ${styles.embla__button__next}`}
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
            >
                <Image src={VectorRight} alt='arrow right' />
            </button>
        </div>
    );
};

export default EmblaCarouselWithArrows;
