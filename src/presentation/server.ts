import express, { Router } from 'express';
import cors from 'cors';

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    this.port = options.port;
    this.routes = options.routes;
  }

  async start() {
    //*MIDDLEWARES
    this.app.use(cors());
    this.app.use(express.json());

    //*ROUTES
    this.app.use(this.routes);

    //*INICIANDO EL SERVIDOR
    this.app.listen(this.port, () => {
      console.log(`Server 1 running on port ${this.port}`);
    });
  }
}
