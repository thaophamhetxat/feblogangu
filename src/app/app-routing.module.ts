import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(module => module.BlogModule)
  },

  //seting mặc định để đi vào login
  // { path: '', redirectTo: '/blog/login', pathMatch: 'full' },
  { path: '', redirectTo: '/blog/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
