import BaseRouter from "entrypoint/web/definitions/Router";
import { Router } from "express";
import { UpdateTodoController, GetTodosController } from "entrypoint/web/controllers";
import CreateTodoController from "entrypoint/web/controllers/CreateTodoController";


class TodoRouter implements BaseRouter {

  #updateTodoController: UpdateTodoController;
  #createTodoController: CreateTodoController;
  #getTodosController: GetTodosController;
  #router: Router;

  constructor(getTodosController: GetTodosController,
    createTodoController: CreateTodoController,
    updateTodoController: UpdateTodoController,
  ) {

    this.#updateTodoController = updateTodoController;
    this.#createTodoController = createTodoController;
    this.#getTodosController = getTodosController;
    this.#router = Router();
    this.configRouter();
  }

  private configRouter(): void {
    this.#router.get("/api/v1/todos", this.#getTodosController.getRequestHandler());
    this.#router.post("/api/v1/todos", this.#createTodoController.getRequestHandler());
    this.#router.put("/api/v1/todos", this.#updateTodoController.getRequestHandler());
  }


  public getRouter(): Router {
    return this.#router;
  }

}

export default TodoRouter;
