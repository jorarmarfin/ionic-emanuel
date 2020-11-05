import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { promise } from 'protractor';
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

    return new Promise(resolve=>{
      this.http.get(`${URL}/login?_format=json&field_email_value=${email}&field_clave_value=${password}`).subscribe(resp=>{
        if (resp[0]) {
          this.guardarToken(resp[0].api_token);
          resolve(true);
        }else{
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });

  }
  async guardarToken(token:string){
    this.token = token;
    await this.storage.set('token',token);
  }
  validaToken(){
    return new Promise(resolve=>{
      

    });
  }



}
