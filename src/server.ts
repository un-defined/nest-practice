import * as express from 'express';
import * as config from 'config';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { ValidationPipe } from './modules/Common/Pipes/validation.pipe';

import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

async function bootstrp() {
    const app = await NestFactory.create(ApplicationModule);
    app.useGlobalPipes(new ValidationPipe());

    await app.use(bodyParser.json());
    await app.use(cookieParser());

    await app.listen(3000);
}

bootstrp();