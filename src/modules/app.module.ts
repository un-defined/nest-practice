import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from "./User/user.module";

@Module({
    // imports: [],
    // controllers: [AppController],
    // components: [],
    modules: [UserModule],
})

export class ApplicationModule {}