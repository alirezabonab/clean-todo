import { TodoInMemoryEntityGateway } from "data/index";


class DatabaseConfiguration {

  static getTodoInMemoryDatabse(): TodoInMemoryEntityGateway {
    const db = new TodoInMemoryEntityGateway();
    return db;
  }

}

export default DatabaseConfiguration;
