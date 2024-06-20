import Footer from '@/components/Footer';
import { TranslationsWrapper as Header } from '@/components/Header/TranslationsWrapper';
import { Lato } from 'next/font/google';
import '../globals.css';

const lato = Lato({
    weight: ['300', '400', '700'],
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
