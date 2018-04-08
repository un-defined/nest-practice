import security from './libs/security';

export const utilProviders = [
    {
        provide: 'Utils',
        useValue: { security },
    },
];