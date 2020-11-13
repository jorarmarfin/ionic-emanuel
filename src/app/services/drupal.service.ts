import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment';
import { Calendario, Cumples, Hermanos, Recursos, Temas } from '../inerfaces/interfaces';
import { UsuarioModel } from '../models/usuario.model';

import * as CryptoJS from 'crypto-js';

const URL = environment.url;
const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Basic cmVzdDo2NWU4ODAwYjVjNjgwMGFhZDg5NmY4ODhiMmE2MmFmYw=='
  })
};

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
    return this.http.get<Temas>(`${URL}/api/recurso/tema_sabado?_format=json`);
  }
  getCumplesDelMes(){
    var f = new Date();
    return this.http.get<Cumples>(`${URL}/api/cumple/${f.getMonth()+1}?_format=json`);
  }
  getCumples(){
    return this.http.get<Cumples>(`${URL}/api/cumple/all?_format=json`);
  }
  getCalendarioDelMes(){
    var f = new Date();
    return this.http.get<Calendario>(`${URL}/api/calendario/mes/${f.getMonth()+1}?_format=json`);
  }
  getCalendarioPortada(){
    var f = new Date();
    var fecha_actual = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
    return this.http.get<Calendario>(`${URL}/api/calendario/portada?_format=json&field_fecha_value=${fecha_actual}&sort_by=field_fecha_value&sort_order=ASC`);
  }
  getRecursos(categoria:string){
    return this.http.get<Recursos>(`${URL}/api/recurso/${categoria}?_format=json`);
  }
  getHermanos(){
    return this.http.get<Hermanos>(`${URL}/api/hermanos?_format=json`);
  }
  setHermano(nid:string,clave:string){
    let hash = CryptoJS.MD5(clave);
    let _hermano = {
            "type": [{ "target_id": "personal"}],
            "field_clave": [{"value": clave}],
            "field_token": [{"value": hash}]
        }
    const body=JSON.stringify(_hermano);
    return this.http.patch(`${URL}/node/${nid}?_format=json`,body,httpHeader);
  }
  login(email:string,password:string){

    return new Promise(resolve=>{
      this.http.get(`${URL}/api/login/${email}/${password}?_format=json`).subscribe(resp=>{
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
        this.http.get(`${URL}/api/token/${this.token}?_format=json`).subscribe(resp=>{
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
