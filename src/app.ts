import express from "express";
import { router } from "./routes/addRouter";

class App {
  private app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use(router);
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

export const app = new App();
