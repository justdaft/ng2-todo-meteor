declare interface IProject  {
    _id?: any;
    text?: string;
    completed?: boolean;
    private?: boolean;
    numberOfTodos?: number;
    numberOfTodosCompleted?: number;
    createdBy?: string;
    createdAt?: Date;
    lastEditDate?: Date;
    owner?: string;
}