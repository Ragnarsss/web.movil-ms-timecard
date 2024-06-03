import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TimeCard } from './entities/time-card.entity';

@Injectable()
export class TimeCardService {
  constructor(
    @InjectModel(TimeCard)
    private timeCardModel: typeof TimeCard,
  ) {}

  create(createData) {
    return this.timeCardModel.create(createData);
  }

  findAll() {
    return this.timeCardModel.findAll();
  }

  findOne(id: number) {
    return this.timeCardModel.findByPk(id);
  }

  async update(id: number, updateTimeCardEntryDto) {
    const timeCardEntry = await this.timeCardModel.findByPk(id);
    return timeCardEntry.update(updateTimeCardEntryDto);
  }

  async remove(id: number) {
    const timeCardEntry = await this.timeCardModel.findByPk(id);
    return timeCardEntry.destroy();
  }
}
