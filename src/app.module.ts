import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoordinatesController } from './coordinates/coordinates.controller';
import { CoordinatesService } from './coordinates/coordinates.service';
import { CoordinatesModule } from './coordinates/coordinates.module';

@Module({
  imports: [
    CoordinatesModule,
    MongooseModule.forRoot('mongodb://localhost/gpsService'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
