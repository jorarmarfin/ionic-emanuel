import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment';
import { Calendario, Cumples, Temas } from '../inerfaces/interfaces';
import { UsuarioModel } from '../models/usuario.model';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DrupalService {

  token:string=null;
  usuario:UsuarioModel;

  constructor(
    private http:HttpClient,
    private storage:Storage,
    private navCtrl:NavController  
    ) { }
  getTemasPortada(){
    return this.http.get<Temas>(`${URL}/recurso/tema_sabado?_format=json`);
  }
  getCumplesDelMes(){
    var f = new Date();
    return this.http.get<Cumples>(`${URL}/cumple/${f.getMonth()+1}?_format=json`);
  }
  getCalendarioDelMes(){
    var f = new Date();
    return this.http.get<Calendario>(`${URL}/calendario/mes/${f.getMonth()+1}?_format=json`);
  }
  login(email:string,password:string){

    return new Promise(resolve=>{
      this.http.get(`${URL}/login/${email}/${password}?_format=json`).subscribe(resp=>{
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
  async cargarToken(){
    //Si no regresa nada que devuelva un null para eso se pone ||
    this.token = await this.storage.get('token')||null;
  }
  async validaToken(){

    await this.cargarToken();
    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    } else {
      return new Promise<boolean>(resolve=>{
        this.http.get(`${URL}/token/${this.token}?_format=json`).subscribe(resp=>{
          if (resp[0]) {
            this.usuario = resp[0];
            this.storage.set('hermano',this.usuario);
            this.guardarToken(resp[0].api_token);
            resolve(true);
          }else{
            this.token = null;
            this.storage.clear();
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
        });
      });
    }


  }

  logout(){
    this.token = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login',{animated:true});
  }



}
