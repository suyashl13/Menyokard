import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export default class UpdateRestaurantDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: "Name of restaurant", required: false })
  restaurantName?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    description: "Contact email address of restaurant",
    required: false,
  })
  restaurantEmail?: string;

  @IsOptional()
  @IsPhoneNumber()
  @ApiProperty({
    description: "Contant phone no. of restaurant.",
    required: false,
  })
  restaurantPhone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "Restaurant address", required: false })
  restaurantAddress: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "City of restaurant", required: false })
  restaurantCity: string;
}
