import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export default class CreateMenuSectionDto {
  @IsString()
  @MaxLength(20)
  @ApiProperty({
    maxLength: 20,
    required: true,
  })
  menuSectionTitle: string;
}
