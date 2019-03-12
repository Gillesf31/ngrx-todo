import { TodoListModule } from '../actions/todo-list.action';
import { TodoListState } from '../../models/todos';
import { todosData } from '../../init-data/todo-list';

// State default values
const initialState: TodoListState = {
    data: [],
    loading: false,
    loaded: false,
    viewTodo: undefined
};

// Reducer
export function todosReducer(state: TodoListState = initialState, action: TodoListModule.Actions) 
: TodoListState {
    switch(action.type) {
        case TodoListModule.ActionTypes.INIT_TODOS :
        console.log("Random init bug ?")
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

        case TodoListModule.ActionTypes.VIEW_TODO:
        return {
            ...state,
            viewTodo: action.payload
        }

        case TodoListModule.ActionTypes.UPDATE_TODO:
        return {
            ...state,
            data: state.data
                .map(todo => action.payload.id === todo.id ? action.payload : todo)
        };

        case TodoListModule.ActionTypes.CHECK_TODO:
        return {
            ...state,
            data: state.data
                .map(todo => {
                    if(todo.id === action.payload.id) {
                        todo.done = !todo.done;
                        return todo;
                    } else {
                      return todo;
                    }
                })
        };

        default:
            return state;
    }
}
