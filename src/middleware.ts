import { localePrefix } from './navigation';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['rs', 'en', 'de'],

    // Used when no locale matches
    defaultLocale: 'rs',
    localePrefix,
    localeDetection: false
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(rs|en|de)/:path*']
};
