import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesController } from './coordinates.controller';
import { CoordinatesService } from './coordinates.service';

import { CreateCoordinateDto } from './dto/create-coordinate.dto';

describe('CoordinatesController', () => {
  let controller: CoordinatesController;

  const mockCoordinatesService = {
    createCoordinates: jest.fn((dto) => {
      return {
        _id: Date.now(),
        ...dto,
      };
    }),
    findAll: jest.fn(() => {
      return [mockCoordinatesDto];
    }),
  };

  const mockCoordinatesDto: CreateCoordinateDto = {
    latitude: 4239.392,
    longitude: 293.5923,
    altitude: 394.2103,
    velocity: 2300,
    visibility: 'low',
    footprint: 483,
    timestamps: 3489324,
    daynum: 398472,
    solar_lat: 834572,
    solar_lon: 5748,
    units: 'kilometers',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoordinatesController],
      providers: [CoordinatesService],
    })
      .overrideProvider(CoordinatesService)
      .useValue(mockCoordinatesService)
      .compile();

    controller = module.get<CoordinatesController>(CoordinatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all coordiantes stored in the database', () => {
    expect(controller.findAll()).toEqual([mockCoordinatesDto]);
  });

  it('should return created coordinates', () => {
    expect(controller.createCoordinates(mockCoordinatesDto)).toEqual({
      _id: expect.any(Number),
      ...mockCoordinatesDto,
    });
  });
});
