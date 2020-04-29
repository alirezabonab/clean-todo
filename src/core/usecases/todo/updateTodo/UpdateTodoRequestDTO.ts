
interface UpdateTodoRequestDTO {
  todoId: string;
  title: string;
  tags: string[];
  isDone: boolean;
  isArchived: boolean;
}

export default UpdateTodoRequestDTO ;
