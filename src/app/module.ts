import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { databaseHost, databaseName, databasePassword, databasePort, databaseUsername } from 'src/config/constants';

import { AppController } from './controller';
import { AppResolver } from './resolver';
import { AppService } from './service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: databaseHost,
      port: databasePort,
      username: databaseUsername,
      password: databasePassword,
      database: databaseName,
      entities: [],
      synchronize: false,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.development', '.env'],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
