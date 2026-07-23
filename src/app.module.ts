import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',

      host: 'postgres',

      port: 5432,

      username: 'postgres',

      password: '123456',

      database: 'nestdb',

      autoLoadEntities: true,

      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
