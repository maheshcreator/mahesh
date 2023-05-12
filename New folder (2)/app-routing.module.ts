import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent } from './add-user/add-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {ErrorComponent}    from './error/error.component';
const routes: Routes = [
  {path:'',component:ListUserComponent},
{path:'add',component:AddUserComponent},
{path:'list',component:ListUserComponent},
{path:'edit/id',component:EditUserComponent},
{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
styles.css:
@import "bootstrap/dist/css/bootstrap.css";
input,tr{
  border:1px solid black !important;
}
h2
{
  text-align:center;
  color:green;
  margin-top:50px;
  text-decoration:underline;
}