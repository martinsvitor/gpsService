import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinateDto } from './dto/create-coordinate.dto';
import { Coordinates } from './interfaces/coordinates.interface';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordService: CoordinatesService) {}

  // Get request to return all stored coordinates

  @Get('all')
  findAll(): Promise<Coordinates[]> {
    return this.coordService.findAll();
  }

  // Post request to receive coordinates from an external device

  @Post()
  createCoordinates(
    @Body() coordinates: CreateCoordinateDto,
  ): Promise<Coordinates> {
    return this.coordService.createCoordinates(coordinates);
  }

  // Get request to receive some random coordinates and store it

  @Get('sample')
  createRandom(): Promise<Coordinates> {
    return this.coordService.createRandom();
  }
}
