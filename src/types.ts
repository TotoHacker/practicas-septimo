export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type TaskAction =
    | { type: 'ADD_TASK'; payload: string }
    | { type: 'TOGGLE_TASK'; payload: number };
  
  export interface TaskState {
    tasks: Task[];
  }
  
  export const initialTaskState: TaskState = {
    tasks: [],
  };
  
  export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks,
            { id: Date.now(), text: action.payload, completed: false }
          ]
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          )
        };
      default:
        return state;
    }
  };
  