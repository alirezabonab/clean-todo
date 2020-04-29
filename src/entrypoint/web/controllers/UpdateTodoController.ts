import { Response } from "express";

import BaseController from "entrypoint/web/definitions/Controller";
import { DecodedExpressRequest } from "entrypoint/web/util/DecodedExpressRequest";
import { UseCaseError } from "core/definition";
import { UpdateTodoUseCase, UpdateTodoRequestDTO, UpdateTodoInvalidRequest } from "core/usecases/todo";
import UpdateTodoResponseDTO from "core/usecases/todo/updateTodo/UpdateTodoResponseDTO";




class UpdateTodoController extends BaseController<UpdateTodoUseCase>{

  protected async processRequst(req: DecodedExpressRequest, res: Response): Promise<void> {

    const result: UpdateTodoResponseDTO = await this.usecase.execute(req.body as UpdateTodoRequestDTO);

    if (result.isError) {
      const error: UseCaseError = result.getError() as UseCaseError;

      if (error instanceof UpdateTodoInvalidRequest) {
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

export default UpdateTodoController;
