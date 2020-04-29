import { Response } from "express";
import BaseController from "entrypoint/web/definitions/Controller";
import { DecodedExpressRequest } from "entrypoint/web/util/DecodedExpressRequest";
import { UseCaseError } from "core/definition";
import { TodoNotFound } from "core/usecases/todo/updateTodo";
import GetTodosUseCase from "core/usecases/todo/getTodos/GetTodosUseCase";
import GetTodosRequestDTO from "core/usecases/todo/getTodos/GetTodosRequestDTO";
import GetTodosResponseDTO from "core/usecases/todo/getTodos/GetTodosResponseDTO";
import { GetTodosInvalidRequest } from "core/usecases/todo/getTodos";

class GetTodosController extends BaseController<GetTodosUseCase>{

  protected async processRequst(req: DecodedExpressRequest, res: Response): Promise<void> {
    const { filterByTag } = req.params;
    const requst: GetTodosRequestDTO = { filterByTag };

    const result: GetTodosResponseDTO = await this.usecase.execute(requst);

    if (result.isError) {
      const error: UseCaseError = result.getError() as UseCaseError;

      if (error instanceof TodoNotFound || error instanceof GetTodosInvalidRequest) {
        this.badRequest(res, error.message);
        return;
      }

      this.fail(res, error.message);
      return;
    }

    this.ok(res, result);
    return;
  }

}

export default GetTodosController;
