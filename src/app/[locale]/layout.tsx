import Footer from '@/components/Footer';
import { TranslationsWrapper as Header } from '@/components/Header/TranslationsWrapper';
import { Inter } from 'next/font/google';
import '../globals.scss';
import Telephone from '@/components/Telephone';
import { useTranslations } from 'next-intl';
import { metaData } from './metadata';
import { Locale } from './metadata.types';

const lato = Inter({
    weight: ['300', '400', '800'],
    subsets: ['latin']
});

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
    return metaData[locale];
}

export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const t = useTranslations('About_us_section');

    return (
        <html lang={locale}>
            <body className={lato.className}>
                <Header />
                <Telephone></Telephone>
                {children}
                <Footer />
            </body>
        </html>
    );
}
