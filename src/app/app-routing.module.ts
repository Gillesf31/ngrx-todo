import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo-list'
  },
  {
    path: 'todo-list',
    loadChildren: './modules/todo-list/todo-list.module#TodoListModule'
  },
  {
    path: '**',
    redirectTo: 'todo-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
