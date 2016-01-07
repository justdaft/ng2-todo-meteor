declare interface IProjectUpdatedEvent {
  projectId: string;
  text?: string;
  completed?: boolean;
}
