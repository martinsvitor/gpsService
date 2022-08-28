export class CreateCoordinateDto {
  readonly latitude: number;
  readonly longitude: number;
  readonly altitude: number;
  readonly velocity: number;
  readonly visibility: string;
  readonly footprint: number;
  readonly timestamps: number;
  readonly daynum: number;
  readonly solar_lat: number;
  readonly solar_lon: number;
  readonly units: string;
}
