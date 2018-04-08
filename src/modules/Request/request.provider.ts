import * as rp from 'request-promise';

export const requestProviders = [
    {
        provide: 'Request',
        useFactory: async (config) => {
            rp.defaults({
                json: true,
                time: true,
                timeout: 5 * 1000,
            });
            return rp;
        },
        inject: [/* 'Config' */],
    },
];