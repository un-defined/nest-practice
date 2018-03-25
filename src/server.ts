import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrp() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(3000);
}

bootstrp();