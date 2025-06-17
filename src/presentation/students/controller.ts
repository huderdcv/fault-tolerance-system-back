import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';

export class StudentsController {
  constructor() {}

  public getStudents = (req: Request, res: Response) => {
    res.json({
      msg: 'Lista de estudiantes',
    });
    return;
  };

  public createStudent = async (req: Request, res: Response) => {
    const { nombre, email } = req.body;

    try {
      const newStudent = await prisma.student.create({
        data: { nombre, email },
      });
      res.json(newStudent);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
