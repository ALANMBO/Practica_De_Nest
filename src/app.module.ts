import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { RegistrationModule } from './registration/registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/entities/student.entity';
import { Course } from './course/entities/course.entity';
import { Registration } from './registration/entities/registration.entity';
//import { DatabaseService } from './database/database.service';

@Module({
  imports: [StudentModule, CourseModule, RegistrationModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'test',
    entities: [Student, Course, Registration],
    synchronize: true,
  }) ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
