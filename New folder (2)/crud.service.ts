import {HttpClient} from '@angular/common/http';
import{Injectable} from '@angular/core';
class Employee{
    id!:number;
    name!:string;
    email!:string;
    phone!:number;
}
@Injectable({
    providedIn:'root'
})
export class CrudService{
    endpoint="http://localhost:3000/users/";
    constructor(private hc:HttpClient){}
    addUser(data:any)
    {
        return
        this.hc.post<Employee>(this.endpoint,data);
    }
    getAllusers()
    {
        return this.hc.get<Employee>(this.endpoint)
    }
    getSingleUser(id:number)
    {
        return this.hc.get<Employee>(this.endpoint+id);
    }
    deleteUser(id:number)
    {
        return this.hc.delete<Employee>(this.endpoint+id)
    }
    updateUser(id:number,data:any)
    {
        return this.hc.put<Employee>(this.endpoint+id,data);
    }
}