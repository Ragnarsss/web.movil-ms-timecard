import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTimeCardInput, UpdateTimeCardInput } from './dto/time-card.dto';
import { TimeCard } from './entities/time-card.entity';

@Injectable()
export class TimeCardService {
  constructor(
    @InjectModel(TimeCard)
    private timeCardModel: typeof TimeCard,
  ) {}

  async create(createData: CreateTimeCardInput): Promise<TimeCard> {
    const data = {
      ...createData,
    };
    return await this.timeCardModel.create(data);
  }

  async findAll(): Promise<TimeCard[]> {
    return await this.timeCardModel.findAll();
  }

  async findOne(id: number): Promise<TimeCard> {
    return await this.timeCardModel.findByPk(id);
  }

  async update(
    id: number,
    updateTimeCardEntryDto: UpdateTimeCardInput,
  ): Promise<TimeCard> {
    const timeCardEntry = await this.timeCardModel.findByPk(id);
    return await timeCardEntry.update(updateTimeCardEntryDto);
  }

  async remove(id: number): Promise<boolean> {
    const timeCardEntry = await this.timeCardModel.findByPk(id);
    await timeCardEntry.destroy();
    return true;
  }
}
