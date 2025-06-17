import { Router } from 'express';
import { StudentsController } from './controller';

export class StudentsRoutes {
  static get routes(): Router {
    const router = Router();
    const studentsController = new StudentsController();
    router.get('/', studentsController.getStudents);
    router.post('/', studentsController.createStudent);
    return router;
  }
}
