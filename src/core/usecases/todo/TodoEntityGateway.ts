import { Todo } from "core/entities";

export interface CreateTodoPayload {
  title: string;
  tags: string[];
}

interface TodoEntityGateway {

  getTodo(todoId: string): Promise<Todo | undefined>;

  updateTodo(todo: Todo): Promise<Todo | undefined>;

  createTodo(payload: CreateTodoPayload): Promise<Todo>;

  getTodos(tag?: string): Promise<Todo[] | undefined>;

}

export default TodoEntityGateway;
