import UseCase from "core/definition/UseCase";
import { Todo } from "core/entities";
import Result from "core/definition/Result";
import TodoEntityGateway from "core/usecases/todo/TodoEntityGateway";
import CreateTodoRequestDTO from "core/usecases/todo/createTodo/CreateTodoRequestDTO";
import CreateTodoResponseDTO from "core/usecases/todo/createTodo/CreateTodoResponseDTO";
import { CreateTodoInvalidRequest } from "core/usecases/todo/createTodo/errors";

class CreateTodoUseCase implements UseCase<CreateTodoRequestDTO, CreateTodoResponseDTO>{

  private todosEntityGateway: TodoEntityGateway;

  constructor(todosEntityGateway: TodoEntityGateway) {
    this.todosEntityGateway = todosEntityGateway;
  }

  async execute(request: CreateTodoRequestDTO): Promise<CreateTodoResponseDTO> {

    if (!request || !request.title) {
      return Result.fail(new CreateTodoInvalidRequest(request));
    }

    const todo = await this.todosEntityGateway.createTodo(request);

    return Result.ok<Todo>(todo);

  }

}

export default CreateTodoUseCase;
