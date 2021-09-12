import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

require("dotenv").config() // reading .env

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECT), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
