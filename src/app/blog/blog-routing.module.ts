import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import  {MenuComponent} from './menu/menu.component';

import  {LoginComponent} from './login/login.component';
import  {SigupComponent} from './sigup/sigup.component';
import {MenuCategoryComponent} from "./category/menu-category/menu-category.component";
import {EditComponent} from "./category/edit/edit.component";
import {CreateCategoryComponent} from "./category/create-category/create-category.component";
import {MenuPostComponent} from "./post/menu-post/menu-post.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {MenuSeeComponent} from "./see/menu-see/menu-see.component";
import {CreateSeeComponent} from "./see/create-see/create-see.component";
import {EditSeeComponent} from "./see/edit-see/edit-see.component";
import {DashboardComponent} from "./showBlog/dashboard/dashboard.component";
import {UsersComponent} from "./maintainent/users/users.component";
import {EditUsersComponent} from "./maintainent/edit-users/edit-users.component";
import {EditAvatarComponent} from "./maintainent/edit-avatar/edit-avatar.component";

const routes: Routes = [
  {
    path : 'menu',
    component : MenuComponent
  },
  {
    path : 'postCategory',
    component : MenuCategoryComponent
  },
  {
    path : 'createPostCategory',
    component : CreateCategoryComponent
  },
  {
    path : 'editPostCategory',
    component : EditComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component : SigupComponent
  },
  {
    path : 'menuPost',
    component : MenuPostComponent
  },
  {
    path : 'createPost',
    component : CreatePostComponent
  },
  {
    path : 'menuSee',
    component : MenuSeeComponent
  },
  {
    path : 'createSee',
    component : CreateSeeComponent
  },
  {
    path : 'editSee',
    component : EditSeeComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'editUsers',
    component : EditUsersComponent
  },
  {
    path : 'editAvatar',
    component : EditAvatarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
