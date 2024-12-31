import React from 'react';
import { useTranslations } from 'next-intl';
import Header from '..';
import { productionLinks } from '../content';

export const TranslationsWrapper = () => {
    const t = useTranslations('Header');
    const translatedProductionLinks = productionLinks(t);
    return (
        <Header
            homeTitle={t('home')}
            aboutUsTitle={t('aboutUs')}
            productionTitle={t('production')}
            contactTitle={t('contact')}
            dropdownLinks={translatedProductionLinks}
        />
    );
};
