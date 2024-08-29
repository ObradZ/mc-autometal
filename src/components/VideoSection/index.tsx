'use client';
import React from 'react';
import SectionWrapper from '../SectionWrapper';
import styles from './VideoSection.module.scss';
import MainHeading from '../MainHeading';
import ReactPlayer from 'react-player';

const VideoSection = ({ videoUrl, videoText }: { videoUrl: string; videoText: string }) => {
    return (
        <SectionWrapper superStyles={styles.videoSection}>
            <div className={styles.videoSectionWrapper}>
                <div className={styles.videoSectionContent}>
                    <MainHeading title='Lorem ipsum' subtitle='Lorem ipsum' shade='dark' />
                    <p className={styles.videoSectionParagraph}>{videoText}</p>
                </div>
                <div className={styles.videoSectionVideoWrapper}>
                    <ReactPlayer width={'100%'} height={'100%'} volume={0} controls url={videoUrl} />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VideoSection;
