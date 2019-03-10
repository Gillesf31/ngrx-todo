import { TodoListModule } from '../actions/todo-list.action';
import { TodoListState } from '../../models/todos';
import {todosData} from '../../init-data/todo-list';
import { ReturnStatement } from '@angular/compiler';

// State default values
const initialState: TodoListState = {
    data: [],
    loading: false,
    loaded: false
};

// Reducer
export function todosReducer(state: TodoListState = initialState, action: TodoListModule.Actions) 
: TodoListState {
    switch(action.type) {
        case TodoListModule.ActionTypes.INIT_TODOS :
        return {
            // New state
            ...state,
            data: [
                // Get fake datas
                ...todosData
            ]
        };

        case TodoListModule.ActionTypes.CREATE_TODO :
        return {
            ...state,
            data: [
                ...state.data,
                action.payload
            ]
        };

        default:
            return state;
    }
}
