import { Module } from '@nestjs/common';
import { TimeCardService } from './time-card.service';
import { TimeCardResolver } from './time-card.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimeCard } from './entities/time-card.entity';

@Module({
  imports: [SequelizeModule.forFeature([TimeCard])],
  providers: [TimeCardResolver, TimeCardService],
  exports: [TimeCardService],
})
export class TimeCardModule {}
