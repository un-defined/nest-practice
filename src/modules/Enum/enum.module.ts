import { Module } from '@nestjs/common';
import { enumProviders } from './enum.provider';

@Module({
    components: [...enumProviders],
    exports: [...enumProviders],
})
export class EnumModule {}