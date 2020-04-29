import { Response } from "express";
import BaseController from "entrypoint/web/definitions/Controller";
import { DecodedExpressRequest } from "entrypoint/web/util/DecodedExpressRequest";
import { UseCaseError } from "core/definition";
import {
  CreateTodoResponseDTO,
  CreateTodoInvalidRequest,
  CreateTodoUseCase
} from "core/usecases/todo";

class CreateTodoController extends BaseController<CreateTodoUseCase>{

  protected async processRequst(req: DecodedExpressRequest, res: Response): Promise<void> {

    const result: CreateTodoResponseDTO = await this.usecase.execute(req.body);

    if (result.isError) {
      const error: UseCaseError = result.getError() as UseCaseError;

      if (error instanceof CreateTodoInvalidRequest) {
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

export default CreateTodoController;
