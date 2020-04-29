
interface UseCase<Request = {}, Response = {}> {
  execute(request: Request): Promise<Response>;
}

export default UseCase;
