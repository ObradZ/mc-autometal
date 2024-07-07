'use client';

import { SliderSectionProps } from './types';
import styles from './SliderSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import Slider from './Slider';

const SliderSection = ({ slides }: SliderSectionProps) => {
    return (
        <SectionWrapper>
            <div className={styles.wrapper}>
                <Slider options={{ loop: true }} slides={slides} />
            </div>
        </SectionWrapper>
    );
};

export default SliderSection;
