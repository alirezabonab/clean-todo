import { GetTodosController, CreateTodoController, UpdateTodoController } from "entrypoint/web/controllers";
import GetTodosUseCase from "core/usecases/todo/getTodos/GetTodosUseCase";
import { CreateTodoUseCase, UpdateTodoUseCase } from "core/usecases/todo";



class ControllersConfiguration {

  static getTodosController(getTodosUseCase: GetTodosUseCase): GetTodosController {
    return new GetTodosController(getTodosUseCase);
  }

  static getCreateTodoController(craeteTodoUseCase: CreateTodoUseCase): CreateTodoController {
    return new CreateTodoController(craeteTodoUseCase);
  }

  static getUpdateTodoController(updateTodoUseCase: UpdateTodoUseCase): UpdateTodoController {
    return new UpdateTodoController(updateTodoUseCase);
  }

}

export default ControllersConfiguration;
