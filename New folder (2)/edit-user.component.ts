import { Component } from '@angular/core';
import {CrudService} from '../crud.service';
import {ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
ulist:any=[];
eid:number=this.act.snapshot.params['id'];
constructor(public cs:CrudService,
  public act:ActivatedRoute,
  public rt:Router){}
ngOnlit()
{
  this.fetchSingleUser(this.eid);
}

  fetchSingleUser(uid:number)
  {

    this.cs.getSingleUser(uid).subscribe(res=>
    {
      this.ulist=res;});
    }
    updateEmpolyee(uid:number,data:any)
    {
      this.cs.updateUser(uid,data).Subscribe();
      this.rt.navigate(['list']);
    }
  }
  
  



