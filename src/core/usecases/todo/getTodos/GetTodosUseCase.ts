import UseCase from "core/definition/UseCase";
import { Todo } from "core/entities";
import Result from "core/definition/Result";
import TodoEntityGateway from "core/usecases/todo/TodoEntityGateway";
import GetTodosRequestDTO from "core/usecases/todo/getTodos/GetTodosRequestDTO";
import GetTodosResponseDTO from "core/usecases/todo/getTodos/GetTodosResponseDTO";


class GetTodosUseCase implements UseCase<GetTodosRequestDTO, GetTodosResponseDTO>{

  private todosEntityGateway: TodoEntityGateway;

  constructor(todosEntityGateway: TodoEntityGateway) {
    this.todosEntityGateway = todosEntityGateway;
  }

  async execute(request: GetTodosRequestDTO): Promise<GetTodosResponseDTO> {

    const { filterByTag } = request;
    const todos = await this.todosEntityGateway.getTodos(filterByTag);

    return Result.ok<Todo[]>(todos || []);

  }

}

export default GetTodosUseCase;
