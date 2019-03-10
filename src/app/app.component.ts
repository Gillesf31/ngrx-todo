import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators' // https://github.com/ReactiveX/rxjs/blob/5.5.2/src/operators/tap.ts#L14
import { AppState } from './store';
import { TodoListModule } from './store/actions/todo-list.action';
import { Todo } from './models/todos';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos$: Observable<Todo[]>;
  private todosLength: number;
  public todoForm: FormGroup;

  constructor(private store: Store<AppState>, @Inject(FormBuilder) fb: FormBuilder) {
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
      id: this.todosLength++
    };

    this.store.dispatch(new TodoListModule.AddTodo(payload));
    // Reset form after dispatching
    this.todoForm.reset();
  }



  ngOnInit() {
    this.store.dispatch(new TodoListModule.InitTodos());
  }
}
