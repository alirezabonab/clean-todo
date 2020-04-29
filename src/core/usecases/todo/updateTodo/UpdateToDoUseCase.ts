import UpdateTodoRequestDTO from "core/usecases/todo/updateTodo/UpdateTodoRequestDTO";
import UpdateTodoResponseDTO from "core/usecases/todo/updateTodo/UpdateTodoResponseDTO";
import UseCase from "core/definition/UseCase";
import TodoEntityGateway from "core/usecases/todo/TodoEntityGateway";
import Result from "core/definition/Result";
import { TodoNotFound, UpdateTodoInvalidRequest } from "core/usecases/todo/updateTodo/errors";
import { Todo } from "core/entities";

class UpdateTodoUseCase implements UseCase<UpdateTodoRequestDTO, UpdateTodoResponseDTO>{

  private todosEntityGateway: TodoEntityGateway;

  constructor(todosEntityGateway: TodoEntityGateway) {
    this.todosEntityGateway = todosEntityGateway;
  }


  async execute(request: UpdateTodoRequestDTO): Promise<UpdateTodoResponseDTO> {
    if (!request || !request.todoId) {
      return Result.fail(new UpdateTodoInvalidRequest(request));
    }

    const { todoId } = request;

    const todo = await this.todosEntityGateway.getTodo(todoId);

    const payload: Todo = { ...todo, ...request };

    const result = await this.todosEntityGateway.updateTodo(payload);

    if (result) {
      return Result.ok(result);
    } else {
      return Result.fail(new TodoNotFound(todoId));
    }
  }

}

export default UpdateTodoUseCase;
