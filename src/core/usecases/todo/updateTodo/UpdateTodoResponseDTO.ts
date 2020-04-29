import Result from "core/definition/Result";
import { Todo } from "core/entities";
import { TodoNotFound, UpdateTodoInvalidRequest, } from "core/usecases/todo/updateTodo/errors";


type UpdateTodoResponseDTO = Result<Todo, TodoNotFound | UpdateTodoInvalidRequest>;

export default UpdateTodoResponseDTO;
