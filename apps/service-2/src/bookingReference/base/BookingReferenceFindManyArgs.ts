/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingReferenceWhereInput } from "./BookingReferenceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BookingReferenceOrderByInput } from "./BookingReferenceOrderByInput";

@ArgsType()
class BookingReferenceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BookingReferenceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BookingReferenceWhereInput, { nullable: true })
  @Type(() => BookingReferenceWhereInput)
  where?: BookingReferenceWhereInput;

  @ApiProperty({
    required: false,
    type: [BookingReferenceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BookingReferenceOrderByInput], { nullable: true })
  @Type(() => BookingReferenceOrderByInput)
  orderBy?: Array<BookingReferenceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BookingReferenceFindManyArgs as BookingReferenceFindManyArgs };
