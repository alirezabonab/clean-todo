import { DatabaseConfiguration } from "config/data";
import { TodoUseCaseConfiguration } from "config/core";
import ControllersConfiguration from "config/entrypoint/ControllersConfiguration";
import RouterConfiguration from "config/entrypoint/RouterConfiguration";
import WebAppConfiguration from "config/entrypoint/WebAppConfiguration";
import { AppConfig } from "entrypoint/web/ExpressApp";

export async function main(): Promise<void> {
  const db = DatabaseConfiguration.getTodoInMemoryDatabse();

  const getTodosUseCase = TodoUseCaseConfiguration.getTodosUseCase(db);
  const createTodoUseCase = TodoUseCaseConfiguration.getCreateTodoUseCase(db);
  const updateTodoUseCase = TodoUseCaseConfiguration.getUpdateTodoUseCase(db);

  const getTodosController = ControllersConfiguration.getTodosController(getTodosUseCase);
  const createTodoController = ControllersConfiguration.getCreateTodoController(createTodoUseCase);
  const updateTodoController = ControllersConfiguration.getUpdateTodoController(updateTodoUseCase);

  const todoRouter = RouterConfiguration.getTodoRouter(getTodosController, createTodoController, updateTodoController);
  const expressApp = WebAppConfiguration.getExpressApp({} as AppConfig, todoRouter);

  expressApp.boot();

}



