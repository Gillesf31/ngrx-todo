import { todosReducer } from "./reducers/todo-list.reducer";
import { TodoListState } from '../models/todos';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

const reducers = {
    todos: todosReducer
};

export interface AppState {
    todos: TodoListState;
}

// Dependency injection cause it's not working with Ahead of Time (?????)
// https://ngrx.io/guide/store/recipes/injecting
// (See more : https://angular.io/guide/aot-compiler & https://angular.io/api/core/InjectionToken)
export function getReducers() { 
    return reducers;
}
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Reducers registered');