'use client';

import styles from './MobileDropdown.module.scss';
import { useRouter } from '../../../navigation';
import { DropdownHeaderProps } from '../types';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import DropdownSubsectionMobile from '../DropdownSubsectionMobile';

const MobileDropdown = ({ title, links, mainHeaderClose, isOpen, toggleOpen }: DropdownHeaderProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const contentHeight = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);

    const handleItemClick = (item: { path: string }) => {
        toggleOpen(isOpen);
        mainHeaderClose();
        router.replace(item.path);
    };

    const isActive = pathname.replaceAll('-', ' ').includes(title);

    const handleAccordionOpen = () => {
        toggleOpen(isOpen);
        const scrollHeight = contentHeight?.current?.scrollHeight;
        if (!!scrollHeight) {
            setHeight((state) => (state = scrollHeight));
        }
    };

    return (
        <div className={styles.wrapper}>
            <h3
                tabIndex={0}
                className={[styles.link, isActive ? styles.isActive : ''].join(' ')}
                onClick={handleAccordionOpen}
            >
                {title}
                {isOpen ? <span className={styles.arrow}>-</span> : <span className={styles.arrow}>+</span>}
            </h3>
            <div
                className={styles.accordionContent}
                ref={contentHeight}
                style={
                    isOpen
                        ? {
                              height: height
                          }
                        : { height: '0px' }
                }
            >
                {links.map((link) =>
                    link.subsection.length > 0 ? (
                        <DropdownSubsectionMobile
                            key={link.name}
                            links={link.subsection}
                            mainHeaderClose={mainHeaderClose}
                            title={link.name}
                            setHeight={setHeight}
                            titleLink='/proizvodnja/masinski-centar/'
                        />
                    ) : (
                        <div key={link.name} onClick={() => handleItemClick(link)} className={styles.link}>
                            {link.name}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default MobileDropdown;
