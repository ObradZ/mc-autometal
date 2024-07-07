'use client';

import { SliderSectionProps } from './types';
import styles from './SliderSection.module.scss';
import SectionWrapper from '../SectionWrapper';
import Slider from './Slider';
import MainHeading from '../MainHeading';

const SliderSection = ({ slides }: SliderSectionProps) => {
    return (
        <SectionWrapper superStyles={styles.superStyles}>
            <MainHeading subtitle='Lorem ipsum' title='Lorem ipsum' shade='dark' />
            <div className={styles.wrapper}>
                <Slider options={{ loop: true }} slides={slides} />
            </div>
        </SectionWrapper>
    );
};

export default SliderSection;
