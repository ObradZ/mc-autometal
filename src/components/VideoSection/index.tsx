'use client';
import React from 'react';
import SectionWrapper from '../SectionWrapper';
import styles from './VideoSection.module.scss';
import MainHeading from '../MainHeading';
import MainLink from '../MainLink';
import ReactPlayer from 'react-player';

const VideoSection = ({
    videoUrl,
    videoText,
    videoTitle,
    videoSubtitle,
    aboutUsText,
    superStyles
}: {
    videoUrl: string;
    videoText: string;
    videoTitle?: string;
    videoSubtitle?: string;
    aboutUsText?: string;
    superStyles?: string;
}) => {
    return (
        <SectionWrapper superStyles={[styles.videoSection, superStyles || ''].join(' ')}>
            <div className={styles.videoSectionWrapper}>
                <div className={styles.videoSectionContent}>
                    <MainHeading title={videoTitle || 'Lorem ipsum'} subtitle={videoSubtitle || ''} shade='dark' />
                    <p className={styles.videoSectionParagraph}>{videoText}</p>
                    {aboutUsText && (
                        <MainLink href='/o-nama' superStyles={`${styles.link} ${styles.linkDesktop}`} shade='dark'>
                            {aboutUsText} →
                        </MainLink>
                    )}
                </div>
                <div className={styles.videoSectionVideoWrapper}>
                    <ReactPlayer width={'100%'} height={'100%'} volume={0} controls url={videoUrl} />
                    {aboutUsText && (
                        <MainLink href='/o-nama' superStyles={`${styles.link} ${styles.linkMobile}`} shade='dark'>
                            {aboutUsText} →
                        </MainLink>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VideoSection;
