import { MetaData } from './metadata.types';

export const metaData: MetaData = {
    rs: {
        applicationName: 'MC Autometal',
        metadataBase: new URL('https://mc-autometal-mu.vercel.app/'),
        title: {
            template: 'MC Autometal | Mašinski centar',
            default: 'MC Autometal | Mašinski centar'
        },
        description: 'MC Autometal je društvo za proizvodnju, usluge i trgovinu u oblasti mašinstva '
    },
    en: {
        applicationName: 'MC Autometal',
        metadataBase: new URL('https://mc-autometal-mu.vercel.app/'),
        title: {
            template: 'MC Autometal | Machine center',
            default: 'MC Autometal | Machine center'
        },
        description:
            'MC Autometal is a company specializing in manufacturing, services, and trade in the field of mechanical engineering. '
    },
    de: {
        applicationName: 'MC Autometal',
        metadataBase: new URL('https://mc-autometal-mu.vercel.app/'),
        title: {
            template: 'MC Autometal | Maschinenzentrum',
            default: 'MC Autometal | Maschinenzentrum'
        },
        description:
            'MC Autometal ist ein Unternehmen, das sich auf die Fertigung, Dienstleistungen und den Handel im Bereich Maschinenbau spezialisiert hat. '
    }
};
