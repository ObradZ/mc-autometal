'use client';
import React from 'react';
import SectionWrapper from '../SectionWrapper';
import styles from './VideoSection.module.scss';
import MainHeading from '../MainHeading';
import ReactPlayer from 'react-player';

const VideoSection = ({ videoUrl }: { videoUrl: string }) => {
    return (
        <SectionWrapper superStyles={styles.videoSection}>
            <div className={styles.videoSectionWrapper}>
                <div className={styles.videoSectionContent}>
                    <MainHeading title='Lorem ipsum' subtitle='Lorem ipsum' shade='dark' />
                    <p className={styles.videoSectionParagraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, beatae velit ullam molestiae
                        aliquam libero dolores soluta sequi. Fugit incidunt commodi eveniet nisi, libero, possimus
                        dignissimos consequatur non sapiente eius explicabo amet! Accusamus, commodi! Voluptatibus
                        nostrum distinctio harum reprehenderit deleniti ab iusto totam beatae, sint officia deserunt
                        excepturi assumenda dicta dolorem placeat. Non, dolorum vitae autem dicta, vel molestias
                        exercitationem, facilis ipsa ad nihil fugiat harum reprehenderit nobis? Deserunt, aperiam.
                    </p>
                </div>
                <div className={styles.videoSectionVideoWrapper}>
                    <ReactPlayer width={'100%'} height={'100%'} volume={0} controls url={videoUrl} />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VideoSection;
