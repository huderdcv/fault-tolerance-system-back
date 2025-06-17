import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';

export class StudentsController {
  constructor() {}

  public getStudents = async (req: Request, res: Response) => {
    try {
      const students = await prisma.student.findMany();
      res.json(students);
      return;
    } catch (error) {
      res.status(500).json({ error });
      return;
    }
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
