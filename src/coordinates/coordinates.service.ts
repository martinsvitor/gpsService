import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Coordinate } from './schemas/coordinates.schema';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CoordinatesService {
  constructor(
    @InjectModel('Coordinate') private readonly coordModel: Model<Coordinate>,
    private readonly httpService: HttpService,
  ) {}
  header = { headers: { 'Content-Type': 'application/json' } };

  async findAll(): Promise<Coordinate[]> {
    return await this.coordModel.find();
  }

  async createCoordinates(coordinates: Coordinate): Promise<Coordinate> {
    const newCoord = new this.coordModel(coordinates);
    return await newCoord.save();
  }

  private async getRandomCoords(): Promise<AxiosResponse<Coordinate>> {
    return await lastValueFrom(
      this.httpService.get(
        'https://api.wheretheiss.at/v1/satellites/25544',
        this.header,
      ),
    );
  }

  async createRandom(): Promise<Coordinate> {
    const randomCoords = await this.getRandomCoords();
    const newCoord = new this.coordModel(randomCoords.data);
    return await newCoord.save();
  }
}
