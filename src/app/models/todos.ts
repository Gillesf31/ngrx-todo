export interface Todo  {
    userId: number;
    id: number;
    title: string;
    done: boolean;
}

// State of todos
export interface TodoListState {
    data: Todo[];
    loading: boolean;
    loaded: boolean;
}