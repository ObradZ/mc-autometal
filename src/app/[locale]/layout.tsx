import Footer from '@/components/Footer';
import { TranslationsWrapper as Header } from '@/components/Header/TranslationsWrapper';
import { Inter } from 'next/font/google';
import '../globals.scss';
import { Metadata } from 'next';
import Telephone from '@/components/Telephone';
import { useTranslations } from 'next-intl';

const serbianMetadata = {
    applicationName: 'MC Autometal',
    metadataBase: new URL('https://mc-autometal-mu.vercel.app/'),
    title: {
        template: 'MC Autometal | Mašinski centar',
        default: 'MC Autometal | Mašinski centar'
    },
    description: 'MC Autometal je društvo za proizvodnju, usluge i trgovinu u oblasti mašinstva '
};

const englishMetadata = {
    applicationName: 'MC Autometal',
    metadataBase: new URL('https://mc-autometal-mu.vercel.app/'),
    title: {
        template: 'MC Autometal | Machine centar',
        default: 'MC Autometal | Machine centar'
    },
    description:
        'MC Autometal is a company specializing in manufacturing, services, and trade in the field of mechanical engineering. '
};

const lato = Inter({
    weight: ['300', '400', '800'],
    subsets: ['latin']
});
export async function generateMetadata({ params: { locale } }: { params: any }) {
    return locale === 'en' ? englishMetadata : serbianMetadata;
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
