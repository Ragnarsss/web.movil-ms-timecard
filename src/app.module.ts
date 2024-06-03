import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimeCardModule } from './time-card/time-card.module';
import { TimeCard } from './time-card/entities/time-card.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import * as myCfg from './config';
import * as dotenv from 'dotenv';

dotenv.config();

const configService = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [myCfg.default],
      isGlobal: true,
      validationSchema: Joi.object({
        MYSQL_DB: Joi.string().required(),
        MYSQL_USER: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_HOST: Joi.string().required(),
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
      dialect: 'postgres',
      host: configService.get('MYSQL_HOST'),
      port: configService.get('MYSQL_PORT'),
      username: configService.get('MYSQL_USER'),
      password: configService.get('MYSQL_PASSWORD'),
      database: configService.get('MYSQL_DB'),
      models: [TimeCard],
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([TimeCard]),
    TimeCardModule,
  ],
})
export class AppModule {}
