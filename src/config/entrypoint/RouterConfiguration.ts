import { TodoRouter } from "entrypoint/web/routers";
import { GetTodosController, UpdateTodoController, CreateTodoController } from "entrypoint/web/controllers";



class RouterConfiguration {

  static getTodoRouter(getTodosController: GetTodosController,
    createTodoController: CreateTodoController,
    updateTodoController: UpdateTodoController,
  ): TodoRouter {
    return new TodoRouter(getTodosController, createTodoController, updateTodoController);
  }

}

export default RouterConfiguration;
