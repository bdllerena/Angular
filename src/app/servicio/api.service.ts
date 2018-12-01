import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Data } from '../modelos/data';

@Injectable({
providedIn:  'root'
})

export  class  APIService
{
    API_URL  =  'https://reqres.in';
    constructor(private  httpClient:  HttpClient) {}
    getUsers(){
          return  this.httpClient.get(`${this.API_URL}/api/users?page=2`);
    }
    createUser(user: Data) {
        return  this.httpClient.post(`${this.API_URL}/api/login`,user);
    }
}
