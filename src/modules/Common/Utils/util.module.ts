import { Module } from '@nestjs/common';
import { utilProviders } from './util.provider';

@Module({
    components: [...utilProviders],
    exports: [...utilProviders],
})
export class CommonUtilsModule { }