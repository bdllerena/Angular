import { Component, OnInit } from  '@angular/core';
import { APIService } from  '../servicio/api.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export  class  UsersComponent  implements  OnInit {
private  users:  Array<object> = [];
  constructor(private router: Router, private  apiService:  APIService) { }
  ngOnInit() {
      this.getUsers();
  }
    salir()
    {
      this.router.navigate(['/login'])
    }
  public  getUsers(){
    this.apiService.getUsers().subscribe((data:  Array<object>) => {
          this.users  =  data;
      });
  }
}
