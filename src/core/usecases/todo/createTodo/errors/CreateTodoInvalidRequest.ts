import UseCaseError from "core/definition/UseCaseError";

export class CreateTodoInvalidRequest extends UseCaseError {

  constructor(requestPayload: unknown) {
    super(`request '${JSON.stringify(requestPayload)}' is not valid`);
  }

}

export default CreateTodoInvalidRequest;
