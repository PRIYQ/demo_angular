import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users/users.component';
import { StudentComponent } from './student/student.component';
import { CountryListComponent } from './country-list/country-list.component';
import  {StatusModule} from './status/status.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    UsersComponent,
    StudentComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
