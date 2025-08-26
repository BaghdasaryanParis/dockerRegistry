import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',       // тип БД
      host: 'localhost',      // хост
      port: 5432,             // порт
      username: 'myuser',     // юзер
      password: 'mypassword', // пароль
      database: 'mydb',       // имя базы
      autoLoadEntities: true, // автоматическая подгрузка сущностей
      synchronize: true,      // синхронизация схемы (в проде лучше false)
    }),
    TypeOrmModule.forFeature([User]), // только сущности здесь
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
