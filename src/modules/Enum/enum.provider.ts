import { requestUrl } from './libs/url';

export const enumProviders = [
    {
        provide: 'EnumRequestUrl',
        useValue: requestUrl,
    },
];