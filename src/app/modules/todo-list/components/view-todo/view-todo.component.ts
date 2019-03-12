import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { Todo } from 'src/app/models/todos';
import { Store, select } from '@ngrx/store';
import { TodoListModule } from 'src/app/store/actions/todo-list.action'
import { Router } from '@angular/router';
import { AppState } from 'src/app/store';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-view-todo',
    templateUrl: './view-todo.component.html',
})

export class ViewTodoComponent implements OnInit {
    public updateTodoForm: FormGroup;
    public viewTodo$: Observable<Todo>;
    public viewTodo: Todo;

    constructor(private store: Store<AppState>, private router:Router, @Inject(FormBuilder) fb: FormBuilder) {
        this.viewTodo$ = store.pipe(select((state) => state.todos.viewTodo), tap(viewTodos => {
            this.viewTodo = viewTodos;
            })
        );

        this.viewTodo$.subscribe();

        this.updateTodoForm = fb.group({
            title: ['', Validators.required],
            done: [false, Validators]
        });
    }

    ngOnInit() {
        if(this.viewTodo) {
            this.updateTodoForm.patchValue({
                title: this.viewTodo.title,
                done: this.viewTodo.done
            });
        }
    }

    updateTodo(formValue) {
        const payload = Object.assign(this.viewTodo, formValue);
        this.store.dispatch(new TodoListModule.UpdateTodo(payload));
        return this.router.navigate(['/todo-list/all-todos']);
    }
}