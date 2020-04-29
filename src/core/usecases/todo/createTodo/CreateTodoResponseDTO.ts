import Result from "core/definition/Result";
import { Todo } from "core/entities";
import {
  CreateTodoInvalidRequest
} from "core/usecases/todo/createTodo/errors";

type CreateTodoResponseDTO = Result<Todo, CreateTodoInvalidRequest>;

export default CreateTodoResponseDTO;
