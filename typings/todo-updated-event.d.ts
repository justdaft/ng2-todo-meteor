declare interface ITodoUpdatedEvent {
  todoId: string;
  text?: string;
  completed?: boolean;
}
