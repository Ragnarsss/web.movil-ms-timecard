import { DateScalar } from './common/date.scalar';
import rootConfig from './rootConfig';
import { TimeCard } from './time-card/entities/time-card.entity';
import { TimeCardModule } from './time-card/time-card.module';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import { join } from 'path';

dotenv.config();

const configService = new ConfigService();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [rootConfig],
      isGlobal: true,
      validationSchema: Joi.object({
        MYSQL_DB: Joi.string().required(),
        MYSQL_USER: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_HOST: Joi.string().required(),
        MYSQL_ROOT_PASSWORD: Joi.string().required(),
        APP_PORT: Joi.number().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: configService.get('MYSQL_HOST'),
      port: configService.get('MYSQL_PORT'),
      username: configService.get('MYSQL_USER'),
      password: configService.get('MYSQL_ROOT_PASSWORD'),
      database: configService.get('MYSQL_DB'),
      models: [TimeCard],
    }),
    SequelizeModule.forFeature([TimeCard]),
    TimeCardModule,
  ],
  providers: [DateScalar],
})
export class AppModule {}
