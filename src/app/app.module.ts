import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { UserItemComponent } from './users/user-item/user-item.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserpostdetailComponent } from './userpostdetail/userpostdetail.component';
import { CommentcomponentComponent } from './commentcomponent/commentcomponent.component';
import { CommentComponent } from './comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DeleteDialogComponent } from './users/delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDetailsComponent } from './userdetails/user-details.component';
import {MatTooltipModule} from '@angular/material/tooltip';


// import {MatPaginator} from '@angular/material/paginator';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    UserDetailsComponent,
    UserpostComponent,
    UserpostdetailComponent,
    CommentcomponentComponent,
    CommentComponent,
    LoginComponent,
    HomeComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    // MatPaginator
    MatExpansionModule,
    MatIconModule ,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DeleteDialogComponent]
})
export class AppModule { }
