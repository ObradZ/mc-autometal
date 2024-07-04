'use client';
import { useRouter, usePathname } from '../../navigation';
import React, { useState } from 'react';
import styles from './LanguageSelector.module.scss';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import LanguageLogo from '@images/language.svg';
import Select from 'react-dropdown-select';
import { ISelectedLang } from './types';
import { options } from './content';

const LanguageSelector = () => {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    const selectedLang = options.find((i) => i.value === locale) || options[0];

    const [values, setValues] = useState<ISelectedLang[]>([selectedLang]);

    const handleLanguageChange = (selected: ISelectedLang[]) => {
        setValues((values) => values);

        router.replace(pathname, { locale: selected[0].value });
    };

    return (
        <div className={styles.languageSelector}>
            <Image src={LanguageLogo} width={26} height={26} alt='language-select'></Image>
            <Select
                className={styles.select}
                searchable={false}
                values={values}
                options={options}
                onChange={(values) => handleLanguageChange(values)}
            />
        </div>
    );
};

export default LanguageSelector;
