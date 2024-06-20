import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@images'] = path.join('/', 'public/static/images');
        return config;
    }
};

export default withNextIntl(nextConfig);
