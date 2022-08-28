import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinateDto } from './dto/create-coordinate.dto';
import { Coordinates } from './interfaces/coordinates.interface';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordService: CoordinatesService) {}

  @Get()
  testEndpoint(): string {
    return 'Endpoint working';
  }
  @Get('all')
  findAll(): Promise<Coordinates[]> {
    return this.coordService.findAll();
  }
  //   @Post()
  //   testInput(@Body() coordinates: CreateCoordinateDto): string {
  //     return `Latt: ${coordinates.latitude}, Lng: ${coordinates.longitude}`;
  //   }
  @Post()
  createCoordinates(
    @Body() coordinates: CreateCoordinateDto,
  ): Promise<Coordinates> {
    return this.coordService.createCoordinates(coordinates);
  }
  @Post('random')
  createRandom(): Promise<Coordinates> {
    return this.coordService.createRandom();
  }
}
