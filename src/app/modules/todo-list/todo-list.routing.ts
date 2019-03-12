import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListAll } from './components/todo-list-all/todo-list-all.component';
import { TodoListComponent } from './todo-list.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'todo-list-all'
        },
        {
            path: 'todo-list-all',
            component: TodoListAll
        },
        {
            path: 'view-todo',
            component: ViewTodoComponent
        },
        {
            path: '**',
            redirectTo: 'todo-list-all'
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRouting { }
