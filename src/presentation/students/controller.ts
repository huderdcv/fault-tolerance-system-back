import { Request, Response } from 'express';

export class StudentsController {
  constructor() {}

  public getStudents = (req: Request, res: Response) => {
    res.json({
      msg: 'Lista de estudiantes',
    });
    return;
  };
}
