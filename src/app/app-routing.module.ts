import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserpostdetailComponent } from './userpostdetail/userpostdetail.component';
import { CommentcomponentComponent } from './commentcomponent/commentcomponent.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './userdetails/user-details.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"home",
    
    component:HomeComponent

  },
  {
    path: "user",
    component: UsersComponent
  },
  {
    path: "user/:id",
    component: UserDetailsComponent
  },
  {
    path: "user/:id/post",
    component: UserpostComponent
  },
  {
    path: "user/:id/post/:postid",
    component: UserpostdetailComponent
  },
  {
    path: "user/:id/post/:postid/comments",
    component: CommentcomponentComponent
  },
  {
    path: "user/:id/post/:postid/comments/:commentid",
    component: CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
