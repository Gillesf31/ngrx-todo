import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators' // https://github.com/ReactiveX/rxjs/blob/5.5.2/src/operators/tap.ts#L14
import { AppState } from '../../../../store';
import { TodoListModule } from '../../../../store/actions/todo-list.action';
import { Todo } from '../../../../models/todos';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list-all',
  templateUrl: './todo-list-all.component.html',
})
export class TodoListAll implements OnInit {
  todos$: Observable<Todo[]>;
  private todosLength: number;
  public todoForm: FormGroup;

  constructor(private store: Store<AppState>, @Inject(FormBuilder) fb: FormBuilder, private router: Router) {
    // pipe is creating readable operators chain on RXJS
    // https://angular.io/guide/rx-library#common-operators
    // Tap to manage id incrementation
    this.todos$ = store.pipe(select((state) => state.todos.data), tap((todos) => {this.todosLength = todos.length}));
    // Add todo form
    this.todoForm = fb.group({
      title: ['', Validators.required],
      done: [false, Validators]
    });
  }

  addTodo(todo: Todo) {
    const payload = {
      ...todo,
      userId: 1,
      // Get last id + 1
      id: this.todosLength+1
    };

    this.store.dispatch(new TodoListModule.AddTodo(payload));
    // Reset form after dispatching
    this.todoForm.reset();
  }

  viewTodo(todo) {
    this.store.dispatch(new TodoListModule.ViewTodo(todo));
    this.router.navigate(['/todo-list/view-todo']);
  }

  updateTodoStateDone(todo) {
    this.store.dispatch(new TodoListModule.CheckTodo(todo));
  }

  ngOnInit() {
    this.store.dispatch(new TodoListModule.InitTodos());
  }
}
