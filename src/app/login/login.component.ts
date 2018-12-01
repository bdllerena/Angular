import { Component, OnInit } from '@angular/core';
import { APIService } from  '../servicio/api.service';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { Data } from '../modelos/data';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginModel = new Data('','');
  constructor(private router: Router, private  apiService:  APIService, private localSt:LocalStorageService) { }

  ngOnInit() {
    this.localSt.observe('key')
    .subscribe((value) => console.log('new value', value));
  }
  onSubmit(){
      this.apiService.createUser(this.loginModel).subscribe((response) => {
          console.log(this.loginModel);
          console.log(response);
          //escribir response.token devuelve solo el token
          this.localSt.store('token',response);
      });
      this.router.navigate(['/users'])
  };
  }
