import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTimeCardInput } from './dto/time-card.dto';
import { TimeCard } from './entities/time-card.entity';
import { TimeCardService } from './time-card.service';

@Resolver('TimeCard')
export class TimeCardResolver {
  constructor(private readonly timeCardService: TimeCardService) {}

  @Mutation('create')
  create(
    @Args('createTimeCardInput') createTimeCardInput: CreateTimeCardInput,
  ) {
    return this.timeCardService.create(createTimeCardInput);
  }

  @Query('findAll')
  findAll(): Promise<TimeCard[]> {
    return this.timeCardService.findAll();
  }

  @Query('findOne')
  findOne(@Args('id') id: number) {
    return this.timeCardService.findOne(id);
  }

  @Mutation('update')
  update(
    @Args('id') id: number,
    @Args('updateTimeCardInput') updateTimeCardInput: CreateTimeCardInput,
  ) {
    return this.timeCardService.update(id, updateTimeCardInput);
  }

  @Mutation('remove')
  remove(@Args('id') id: number) {
    return this.timeCardService.remove(id);
  }
}
