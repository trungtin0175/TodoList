export enum TaskStatus {
  Todo = 0,
  InProgress = 1,
  Done = 2,
  All = 3,
}

export interface Subtask {
  id: number;
  value: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  dueDate: string;
  subTasks: Subtask[];
}
