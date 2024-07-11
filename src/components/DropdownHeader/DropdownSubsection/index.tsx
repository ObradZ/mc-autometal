import React from 'react';
import styles from './DropdownSubsection.module.scss';
import { useRouter } from '../../../navigation';
import { usePathname } from 'next/navigation';
const DropdownSubsection = ({
    links,
    titleLink,
    title
}: {
    links: { name: string; path: string }[];
    titleLink?: string;
    title: string;
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const handleItemclick = (link: { path: string }) => {
        router.push(link.path);
    };
    const isActive = pathname.replaceAll('-', ' ').includes(title);
    return (
        <div className={styles.dropdownSubsectionContainer}>
            <h3
                onClick={() => titleLink && router.push(titleLink)}
                className={[styles.subsectionHeading, isActive ? styles.isActive : ''].join(' ')}
            >
                {title}
            </h3>
            <div className={styles.subsectionList}>
                {links.map((link) => (
                    <p key={link.name} className={styles.subsectionListItem} onClick={() => handleItemclick(link)}>
                        {link.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default DropdownSubsection;
