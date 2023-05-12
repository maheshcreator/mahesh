import { Component } from '@angular/core';
import {crudService} from '../crud.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
ulist:any=[];
constructor(public cs:CrudService){}
ngOnInit()
{
  this.fetchAllUsers();
}
fetchAllUsers()
  {
    this.cs.getAllUsers().subscribe(res=>{this.ulist=res;});
  }
  removeEmployee(uid:number)
  {
    if(confirm("Are you delete this employee?"))
    {
      this.cs.deleteUser(uid).subscribe();
      this.fetchAllUsers();
    }
  }
}
