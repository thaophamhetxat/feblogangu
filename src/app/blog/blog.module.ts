import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { MenuComponent } from './menu/menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SigupComponent } from './sigup/sigup.component';
import { MenuCategoryComponent } from './category/menu-category/menu-category.component';
import { EditComponent } from './category/edit/edit.component';

import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { MenuPostComponent } from './post/menu-post/menu-post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { MenuSeeComponent } from './see/menu-see/menu-see.component';
import { CreateSeeComponent } from './see/create-see/create-see.component';
import { EditSeeComponent } from './see/edit-see/edit-see.component';
import { DashboardComponent } from './showBlog/dashboard/dashboard.component';
import { UsersComponent } from './maintainent/users/users.component';
import { EditUsersComponent } from './maintainent/edit-users/edit-users.component';
import { EditAvatarComponent } from './maintainent/edit-avatar/edit-avatar.component';

@NgModule({
  declarations: [
    MenuComponent,
    SigupComponent,
    MenuCategoryComponent,
    EditComponent,
    MenuCategoryComponent,
    CreateCategoryComponent,
    MenuPostComponent,
    CreatePostComponent,
    MenuSeeComponent,
    CreateSeeComponent,
    EditSeeComponent,
    DashboardComponent,
    UsersComponent,
    EditUsersComponent,
    EditAvatarComponent,

  ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class BlogModule { }
