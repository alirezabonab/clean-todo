import { ExpressApp } from "entrypoint/web";
import { AppConfig } from "entrypoint/web/ExpressApp";
import { TodoRouter } from "entrypoint/web/routers";

class WebAppConfiguration {

  static getExpressApp(config: AppConfig, todoRouter: TodoRouter): ExpressApp {
    return new ExpressApp(config, todoRouter);
  }

}

export default WebAppConfiguration;
