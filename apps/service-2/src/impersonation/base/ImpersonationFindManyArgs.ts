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
import { ImpersonationWhereInput } from "./ImpersonationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ImpersonationOrderByInput } from "./ImpersonationOrderByInput";

@ArgsType()
class ImpersonationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ImpersonationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ImpersonationWhereInput, { nullable: true })
  @Type(() => ImpersonationWhereInput)
  where?: ImpersonationWhereInput;

  @ApiProperty({
    required: false,
    type: [ImpersonationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ImpersonationOrderByInput], { nullable: true })
  @Type(() => ImpersonationOrderByInput)
  orderBy?: Array<ImpersonationOrderByInput>;

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

export { ImpersonationFindManyArgs as ImpersonationFindManyArgs };
