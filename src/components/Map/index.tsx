'use client';
import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.scss';
import { mapContent } from './content';
import Image from 'next/image';
import Pin from '@images/Contact/pin.png';
import SectionWrapper from '../SectionWrapper';

const MapComponent = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const handleMarkerClick = (e: any) => {
        e.originalEvent.stopPropagation();
        setPopupOpen((state) => !state);
    };
    return (
        <SectionWrapper superStyles={styles.mapContainer}>
            <Map
                mapLib={import('mapbox-gl')}
                initialViewState={{
                    longitude: mapContent.longitude,
                    latitude: mapContent.latitude,
                    zoom: 13
                }}
                style={{ width: '100%', height: 330 }}
                mapStyle='mapbox://styles/mapbox/standard'
                mapboxAccessToken='pk.eyJ1IjoibWFya29uczE5OTAiLCJhIjoiY2txNmd5NnQzMXNibzJ2cXJydW9icHV3NiJ9.tiKjJKOEiLZ2xXEj9ZjQVA'
            >
                <Marker
                    onClick={handleMarkerClick}
                    longitude={mapContent.longitude}
                    style={{ width: 25, height: 25 }}
                    latitude={mapContent.latitude}
                    anchor='center'
                >
                    <Image width={40} height={50} className={styles.marker} src={Pin} alt='marker' />
                </Marker>
                {popupOpen && (
                    <Popup anchor='bottom' latitude={mapContent.latitude} longitude={mapContent.longitude}>
                        <div className={styles.popup}>
                            <p className={styles.popupItem}>{mapContent.city}</p>
                            <p className={styles.popupItem}>{mapContent.address}</p>
                            <p className={styles.popupItem}>{mapContent.email}</p>
                            <p className={styles.popupItem}>{mapContent.phone}</p>
                        </div>
                    </Popup>
                )}
            </Map>
        </SectionWrapper>
    );
};

export default MapComponent;
