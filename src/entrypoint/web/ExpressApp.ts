import { Application, default as express } from "express";
import bodyParser from "body-parser";
import { TodoRouter } from "entrypoint/web/routers";

export interface AppConfig {
  port: number;
}

class ExpressApp {

  #app: Application;
  #config: AppConfig;
  #todoRouter: TodoRouter;

  constructor(config: AppConfig, todoRouter: TodoRouter) {
    this.#app = express();
    this.#config = { port: 3000, ...config };
    this.#todoRouter = todoRouter;
  }

  private configApp(): void {
    const app = this.#app;

    app.use(bodyParser.json());

    app.use(this.#todoRouter.getRouter());
  }


  boot(): Application {
    if (!this.#app) {
      this.#app = express();
    }

    this.configApp();

    this.#app.listen(this.#config.port, () => {
      console.log(`App listening on port ${this.#config.port}!`);
    });

    return this.#app;
  }

}

export default ExpressApp;
