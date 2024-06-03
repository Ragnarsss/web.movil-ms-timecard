import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TimeCardService } from './time-card.service';
import { CreateTimeCardInput, TimeCardType } from './dto/time-card.dto';
import { TimeCard } from './entities/time-card.entity';

@Resolver('TimeCard')
export class TimeCardResolver {
  constructor(private readonly timeCardService: TimeCardService) {}

  @Mutation(() => TimeCardType)
  create(
    @Args('createTimeCardInput') createTimeCardInput: CreateTimeCardInput,
  ) {
    return this.timeCardService.create(createTimeCardInput);
  }

  @Query('timeCards')
  findAll(): Promise<TimeCard[]> {
    return this.timeCardService.findAll();
  }

  @Query(() => TimeCardType)
  findOne(@Args('id') id: number) {
    return this.timeCardService.findOne(id);
  }
}
