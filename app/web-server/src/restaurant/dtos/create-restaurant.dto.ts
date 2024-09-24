import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsPhoneNumber, IsString, MaxLength } from "class-validator";

export default class CreateRestaurantDto {
  @ApiProperty({
    maxLength: 30,
  })
  @IsString()
  @MaxLength(30)
  restaurantName: string;

  @ApiProperty()
  @IsEmail()
  restaurantEmail: string;

  @ApiProperty({
    maxLength: 12,
  })
  @IsPhoneNumber()
  restaurantPhone: string;

  @ApiProperty({
    maxLength: 120,
  })
  @IsString()
  @MaxLength(120)
  restaurantAddress: string;

  @ApiProperty({
    maxLength: 20,
  })
  @IsString()
  @MaxLength(20)
  restaurantCity: string;
}
