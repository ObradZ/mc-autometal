import Link from 'next/link';
import { MainLinkProps } from './types';
import styles from './MainLink.module.scss';

const MainLink = ({ href, children, superStyles = '', shade, onClick }: MainLinkProps) => {
    return (
        <Link className={[shade === 'light' ? styles.linkLight : styles.linkDark, superStyles].join(' ')} href={href} onClick={onClick}>
            {children}
        </Link>
    );
};

export default MainLink;
