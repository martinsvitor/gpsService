import { HttpService } from '@nestjs/axios';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinateDto } from './dto/create-coordinate.dto';
import { Coordinates } from './interfaces/coordinates.interface';
import { Coordinate } from './schemas/coordinates.schema';

describe('CoordinatesService', () => {
  let service: CoordinatesService;
  let httpService: HttpService;

  const coordMockSchema = {
    latt: Number,
    lngt: Number,
  };

  const mockResponse: CreateCoordinateDto = {
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
      providers: [
        CoordinatesService,
        {
          provide: getModelToken('Coordinate'),
          useValue: coordMockSchema,
        },
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(() => mockResponse),
          },
        },
      ],
    }).compile();
    (httpService = module.get<HttpService>(HttpService)),
      (service = module.get<CoordinatesService>(CoordinatesService));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a random coordinate', async () => {
    const response = await httpService.get<Coordinates[]>(
      'https://api.wheretheiss.at/v1/satellites/25544',
    );
    expect(response).toBe(mockResponse);
  });
});
