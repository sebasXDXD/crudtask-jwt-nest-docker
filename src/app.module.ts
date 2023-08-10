import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksTypesModule } from './tasks_types/tasks_types.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'sebas_cruds',
    password: 'root',
    database: 'task_db',
    autoLoadEntities: true,
    synchronize: true,

  }),TasksModule, TasksTypesModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
