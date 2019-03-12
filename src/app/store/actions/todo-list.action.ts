import { Todo } from 'src/app/models/todos';

// Action to init the list of our todos
// Encapsulate in only one namespace for imports
export namespace TodoListModule {

    // Actions names
    export enum ActionTypes {
        INIT_TODOS = '[todoList] Init the list of todos',
        CREATE_TODO = '[todoList] Add a todo',
        VIEW_TODO = '[todoList] View a todo',
        UPDATE_TODO = '[todoList] Update a todo',
        CHECK_TODO = '[todoList] Check a todo'
    }

    export class InitTodos {
        readonly type = ActionTypes.INIT_TODOS;
    }

    export class AddTodo {
        readonly type = ActionTypes.CREATE_TODO;
        constructor(public payload: Todo) {}
    }

    export class ViewTodo {
        readonly type = ActionTypes.VIEW_TODO;
        constructor(public payload: Todo) {}
    }

    export class UpdateTodo {
        readonly type = ActionTypes.UPDATE_TODO;
        constructor(public payload: Todo) {}
    }

    export class CheckTodo {
        readonly type = ActionTypes.CHECK_TODO;
        constructor(public payload: Todo) {}
    }

    // typing reducer
    export type Actions = InitTodos | AddTodo | ViewTodo | UpdateTodo | CheckTodo;
}