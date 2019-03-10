import { Todo } from 'src/app/models/todos';

// Action to init the list of our todos
// Encapsulate in only one namespace for imports
export namespace TodoListModule {

    // Actions names
    export enum ActionTypes {
        INIT_TODOS = '[todoList] Init the list of todos',
        CREATE_TODO = '[todoList] Add a todo'
    }

    export class InitTodos {
        readonly type = ActionTypes.INIT_TODOS;
    }

    export class AddTodo {
        readonly type = ActionTypes.CREATE_TODO;
        constructor(public payload: Todo) {}
    }

    // typing reducer
    export type Actions = InitTodos | AddTodo;
}