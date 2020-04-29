import { TodoEntityGateway, CreateTodoPayload } from "core/usecases/todo";
import { Todo } from "core/entities";

class TodoInMemoryEntityGateway implements TodoEntityGateway {
  #todos: Todo[];

  constructor() {
    this.#todos = [];
  }

  async getTodo(todoId: string): Promise<Todo | undefined> {
    const result = this.#todos.find(t => t.todoId === todoId);
    return result;
  }

  async updateTodo(todo: Todo): Promise<Todo | undefined> {
    const index = this.#todos.findIndex((t: Todo) => t.todoId === todo.todoId);
    this.#todos[index] = todo;
    return todo;
  }

  async createTodo(payload: CreateTodoPayload): Promise<Todo> {
    const todo: Todo = {
      ...payload,
      isArchived: false,
      isDone: false,
      todoId: Date.now.toString()
    };

    this.#todos.push(todo);

    return todo;
  }

  async getTodos(tag?: string | undefined): Promise<Todo[] | undefined> {
    if (tag) {
      return this.#todos.filter(t => t.tags.includes(tag));
    }
    return this.#todos;
  }
}

export default TodoInMemoryEntityGateway;
