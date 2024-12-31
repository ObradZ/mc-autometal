import React, { useRef, useState } from 'react';
import styles from './DropdownSubsectionMobile.module.scss';
import { useRouter } from '../../../navigation';

const DropdownSubsectionMobile = ({
    links,
    mainHeaderClose,
    setHeight,
    title,
    titleLink
}: {
    links: { path: string; name: string }[];
    mainHeaderClose: Function;
    setHeight: Function;
    title: string;
    titleLink?: string;
}) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const router = useRouter();

    const contentHeight = useRef<HTMLDivElement>(null);
    const handleItemClick = (item: string) => {
        mainHeaderClose();
        setIsOpenDropdown((state) => !state);
        handleHeight();
        router.replace(item);
    };

    const handleHeight = () => {
        const currEl = contentHeight?.current;

        if (!isOpenDropdown) {
            setHeight((state: number) => currEl && state + currEl.scrollHeight);
        } else {
            setHeight((state: number) => currEl && state - currEl.scrollHeight);
        }
    };

    const handleOpenAccordion = () => {
        setIsOpenDropdown((state) => !state);
        handleHeight();
    };

    const handleTitleClick = (e: any) => {
        titleLink && router.push(titleLink);
        mainHeaderClose();
    };

    return (
        <div className={styles.subsectionMobileContainer}>
            <div className={styles.subsectionHeading}>
                <h3 onClick={handleTitleClick}>{title}</h3>

                {isOpenDropdown ? (
                    <span onClick={() => handleOpenAccordion()} className={styles.arrow}>
                        -
                    </span>
                ) : (
                    <span onClick={() => handleOpenAccordion()} className={styles.arrow}>
                        +
                    </span>
                )}
            </div>
            <div
                className={styles.accordionContentSubsection}
                ref={contentHeight}
                style={
                    isOpenDropdown
                        ? {
                              height: contentHeight?.current?.scrollHeight
                          }
                        : { height: '0px' }
                }
            >
                {links.map((link) => (
                    <div key={link.name} onClick={() => handleItemClick(link.path)} className={styles.subsectionLink}>
                        {link.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownSubsectionMobile;
