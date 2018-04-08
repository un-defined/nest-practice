import { Module } from '@nestjs/common';
import { requestProviders } from './request.provider';

@Module({
    components: [...requestProviders],
    exports: [...requestProviders],
})
export class RequestModule {}