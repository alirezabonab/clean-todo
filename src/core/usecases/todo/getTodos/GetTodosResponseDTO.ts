import Result from "core/definition/Result";
import { Todo } from "core/entities";
import { GetTodosInvalidRequest } from "core/usecases/todo/getTodos/errors";

type GetTodosResponseDTO = Result<Todo[], GetTodosInvalidRequest>;

export default GetTodosResponseDTO;
