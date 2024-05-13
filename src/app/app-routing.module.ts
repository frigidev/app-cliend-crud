import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormPageComponent } from './pages/users-form-page/users-form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListUsersPageComponent } from './pages/list-users-page/list-users-page.component';
import { UpdateUserPageComponent } from './pages/update-user-page/update-user-page.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomePageComponent},
  {path: "form", component: UsersFormPageComponent},
  {path: "list", component: ListUsersPageComponent},
  {path: "form/:id", component: UpdateUserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
