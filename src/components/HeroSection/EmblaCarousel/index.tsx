'use client';

import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import { DotButton, useDotButton } from './EmblaCarouseDotButton';
import './embla.css';

type PropType = {
    slides: ReactNode[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    return (
        <div className='embla'>
            <div className='embla__viewport' ref={emblaRef}>
                <div className='embla__container'>
                    {slides.map((item, index) => (
                        <div className='embla__slide' key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className='embla__dots'>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;
