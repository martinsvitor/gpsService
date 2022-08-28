import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoordinateDocument = Coordinate & Document;

@Schema()
export class Coordinate {
  @Prop()
  latitude: number;
  @Prop()
  longitude: number;
  @Prop()
  altitude: number;
  @Prop()
  velocity: number;
  @Prop()
  visibility: string;
  @Prop()
  footprint: number;
  @Prop()
  timestamps: number;
  @Prop()
  daynum: number;
  @Prop()
  solar_lat: number;
  @Prop()
  solar_lon: number;
  @Prop()
  units: string;
}

export const CoordinateSchema = SchemaFactory.createForClass(Coordinate);
