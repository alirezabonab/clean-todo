import TodoEntityGateway from "core/usecases/todo/TodoEntityGateway";
import GetTodosUseCase from "core/usecases/todo/getTodos/GetTodosUseCase";
import { UpdateTodoUseCase, CreateTodoUseCase } from "core/usecases/todo";


class TodoUseCasesConfiguration {

  static getTodosUseCase(todoEntityGateway: TodoEntityGateway): GetTodosUseCase {
    return new GetTodosUseCase(todoEntityGateway);
  }


  static getUpdateTodoUseCase(todoEntityGateway: TodoEntityGateway): UpdateTodoUseCase {
    return new UpdateTodoUseCase(todoEntityGateway);
  }

  static getCreateTodoUseCase(todoEntityGateway: TodoEntityGateway): CreateTodoUseCase {
    return new CreateTodoUseCase(todoEntityGateway);
  }

}

export default TodoUseCasesConfiguration;
