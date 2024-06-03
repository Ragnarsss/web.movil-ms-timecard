import { Test, TestingModule } from '@nestjs/testing';
import { TimeCardResolver } from './time-card.resolver';
import { TimeCardService } from './time-card.service';

describe('TimeCardResolver', () => {
  let resolver: TimeCardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeCardResolver, TimeCardService],
    }).compile();

    resolver = module.get<TimeCardResolver>(TimeCardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
