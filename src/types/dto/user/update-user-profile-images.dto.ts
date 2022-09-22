import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { parseBoolTransformer } from '../../../transformers/parse-bool.transformer';
import { IntersectionTypeX } from '../../../utils/swagger-types';

export class UserProfileImagesDto {
  @ApiPropertyOptional({
    description: 'Profile image to upload',
    type: 'file',
    format: 'binary'
  })
  profileImage: Express.Multer.File[];

  @ApiPropertyOptional({
    description: 'Banner image to upload',
    type: 'file',
    format: 'binary'
  })
  bannerImage: Express.Multer.File[];
}

export class DeleteUserProfileImagesDto {
  @ApiPropertyOptional({
    description: 'Whether to remove the current profile image'
  })
  @Transform(parseBoolTransformer({ optional: true }))
  @IsBoolean()
  @IsOptional()
  deleteProfileImage?: boolean;

  @ApiPropertyOptional({
    description: 'Whether to remove the current banner image'
  })
  @Transform(parseBoolTransformer({ optional: true }))
  @IsBoolean()
  @IsOptional()
  deleteBannerImage?: boolean;
}

export class UpdateUserProfileImagesDto extends IntersectionTypeX(UserProfileImagesDto, DeleteUserProfileImagesDto) {}
