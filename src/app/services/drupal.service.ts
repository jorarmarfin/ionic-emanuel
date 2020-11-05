import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DrupalService {

  token:string=null;

  constructor(
    private http:HttpClient,
    private storage:Storage        
    ) { }

  login(email:string,password:string){

    this.http.get(`${URL}/login?_format=json&field_email_value=${email}&field_clave_value=${password}`).subscribe(resp=>{
      console.log(resp[0].api_token);
    });
  }
  async guardarToken(token:string){
    this.token = token;
    await this.storage.set('token',token);
  }



}
