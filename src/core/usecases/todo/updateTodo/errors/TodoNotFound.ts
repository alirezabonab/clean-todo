import UseCaseError from "core/definition/UseCaseError";

export class TodoNotFound extends UseCaseError {

  constructor(todoId: string) {
    super(`todoId '${todoId}' not found`);
  }

}

export default TodoNotFound;
