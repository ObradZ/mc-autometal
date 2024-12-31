export const productionLinks = (t: any) => [
    {
        name: t('CNC LASER'),
        path: '/proizvodnja/cnc-laser',
        subsection: []
    },
    {
        name: t('MAŠINSKI CENTAR'),
        subsection: [
            { name: t('GLODANJE'), path: '/proizvodnja/masinski-centar/glodanje', subsection: [] },
            { name: t('STRUGANJE'), path: '/proizvodnja/masinski-centar/struganje', subsection: [] },
            { name: t('BRUŠENJE'), path: '/proizvodnja/masinski-centar/brusenje', subsection: [] },
            { name: t('BUŠENJE'), path: '/proizvodnja/masinski-centar/busenje', subsection: [] }
        ],
        path: ''
    },
    {
        name: t('PLASTIČNO DEFORMISANJE'),
        path: '/proizvodnja/plasticno-deformisanje',
        subsection: []
    }
];
