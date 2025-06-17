import { Router } from 'express';
import { StudentsRoutes } from './students/routes';

export class AppRouter {
  static get routes(): Router {
    const router = Router();
    router.use('/api/students', StudentsRoutes.routes);
    return router;
  }
}
