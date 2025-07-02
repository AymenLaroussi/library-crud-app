import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list.component';
import { BookFormPageComponent } from './components/book-form.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: BookFormPageComponent },
  { path: 'books/edit/:id', component: BookFormPageComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', redirectTo: '/books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
