import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { MediaType, ContentStatus } from '../../../generated/prisma/client';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(MediaType)
  type!: MediaType;

  @IsEnum(ContentStatus)
  status!: ContentStatus;

  @IsNumber()
  @IsOptional()
  releaseYear?: number;

  @IsString()
  @IsOptional()
  coverUrl?: string;
}
