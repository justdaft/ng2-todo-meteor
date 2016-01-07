declare interface ITodo {
  _id?: string;
  projectId?: string;
  text: string;
  completed: boolean;
  private?: boolean;
  username?: string;
  owner?: string;
  todoName?: string;
  todoQty?: number;
}
