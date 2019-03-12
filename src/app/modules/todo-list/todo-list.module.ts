import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { TodoListAll } from './components/todo-list-all/todo-list-all.component';
import { ToDoListRouting } from './todo-list.routing';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';
import { MaterialModule } from '../../../material';


@NgModule({
    imports: [
        CommonModule,
        ToDoListRouting,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [TodoListComponent, TodoListAll, ViewTodoComponent]
})

export class TodoListModule {}