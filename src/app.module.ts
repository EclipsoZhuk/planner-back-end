import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TimeBlockModule } from './time-block/time-block.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    TaskModule,
    TimeBlockModule,
    PomodoroModule,
  ],
})
export class AppModule {}
