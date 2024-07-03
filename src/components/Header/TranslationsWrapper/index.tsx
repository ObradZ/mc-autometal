import React from 'react';
import { useTranslations } from 'next-intl';
import Header from '..';

export const TranslationsWrapper = () => {
    const t = useTranslations('Header');

    return (
        <Header
            homeTitle={t('home')}
            aboutUsTitle={t('aboutUs')}
            productionTitle={t('production')}
            contactTitle={t('contact')}
        />
    );
};
