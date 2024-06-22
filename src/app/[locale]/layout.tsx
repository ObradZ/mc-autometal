import Footer from '@/components/Footer';
import { TranslationsWrapper as Header } from '@/components/Header/TranslationsWrapper';
import { Inter } from 'next/font/google';
import '../globals.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    applicationName: 'MC Autometal',
    metadataBase: new URL('https://mc-autometal-mu.vercel.app/'),
    title: {
        template: 'MC Autometal | Mašinski centar',
        default: 'MC Autometal | Mašinski centar'
    },
    description: 'MC Autometal je društvo za proizvodnju, usluge i trgovinu u oblasti mašinstva '
};
const lato = Inter({
    weight: ['300', '400', '800'],
    subsets: ['latin']
});
export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body className={lato.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
