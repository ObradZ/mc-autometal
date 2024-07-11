import styles from './DesktopDropdownHeader.module.scss';
import { useRouter } from '../../../navigation';
import { DropdownHeaderProps } from '../types';
import { usePathname } from 'next/navigation';
import DropdownSubsection from '../DropdownSubsection';

const DesktopDropdown = ({ title, links }: DropdownHeaderProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleItemClick = (item: { path: string }) => {
        router.push(item.path);
    };

    const isActive = pathname.replaceAll('-', ' ').includes(title);

    return (
        <div className={styles.dropdownHeaderContainer}>
            <h3 tabIndex={0} className={[styles.dropdownTitle, isActive ? styles.isActive : ''].join(' ')}>
                {title}
            </h3>
            <div className={styles.listContainer}>
                {links.map((link) =>
                    link.subsection.length > 0 ? (
                        <DropdownSubsection
                            key={link.name}
                            links={link.subsection}
                            title={'Mašinski centar'}
                            titleLink='/proizvodnja/masinski-centar/'
                        />
                    ) : (
                        <p key={link.name} onClick={() => handleItemClick(link)} className={styles.listItem}>
                            {link.name}
                        </p>
                    )
                )}
            </div>
        </div>
    );
};

export default DesktopDropdown;
