import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hermanos, Recursos,Calendario, Avisos, DataEmanuel, Cronograma } from '../inerfaces/interfaces';

import { map } from "rxjs/operators";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { UsuarioModel } from '../models/usuario.model';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  token:string=null;
  usuario:UsuarioModel;
  constructor(
    private http:HttpClient,
    private firebaseDatabase:AngularFireDatabase,
    private storage:Storage,
    private afAuth:AngularFireAuth,
    private navCtrl:NavController
  ) { }

  login(email:string,password:string){

    return new Promise(resolve=>{
      this.afAuth.signInWithEmailAndPassword(email,password).then(resp=>{
        resp.user.getIdToken().then(token=>{
          this.guardarToken(token);
          this.getHermano(resp.user.email).subscribe(resp=>{
            this.storage.set('hermano',resp[0]);
          });
          resolve(true);
        })
        //this.navCtrl.navigateRoot('/inicio',{ animated:true });
  
      }).catch(err=>{
          this.token = null;
          this.storage.clear();
          resolve(false);
      });
    });

  }
  logout(){
    this.afAuth.signOut();
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
        this.afAuth.authState.subscribe(resp=>{
          if (resp==null) {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          } else {
            resolve(true);
          }
        });
        // this.afAuth.idToken.subscribe(resp=>{
        //   if(resp=this.token){
        //     resolve(true);
        //   }else{
        //     this.navCtrl.navigateRoot('/login');
        //     resolve(false);
        //   }
        // })

        // this.http.get(`${URL}/api/token/${this.token}?_format=json`).subscribe(resp=>{
        //   if (resp[0]) {
        //     this.usuario = resp[0];
        //     this.storage.set('hermano',this.usuario);
        //     this.guardarToken(resp[0].api_token);
        //     resolve(true);
        //   }else{
        //     this.token = null;
        //     this.storage.clear();
        //     this.navCtrl.navigateRoot('/login');
        //     resolve(false);
        //   }
        // });
      });
    }


  }
  getCronograma(){
    return this.firebaseDatabase.list<Cronograma>('cronograma').valueChanges();
  }
  getHermanos(){
    return this.firebaseDatabase.list<Hermanos>('hermanos').valueChanges()
           .pipe(
             map(resp=>{
               let data = this.crearArreglo(resp,'hermanos')
              return this.sortJSON(data, 'nombres', 'asc');
            })
           );
  }
  getHermano(email:string){
    return this.firebaseDatabase.list('hermanos',resp=>resp.orderByChild('email').equalTo(email)).valueChanges();
  }
  setHermano(uid:string,clave:string){
    
  }
  getCumples(){
    return this.firebaseDatabase.list<Hermanos>('hermanos').valueChanges()
                .pipe(map(resp=>{
                  let data = this.crearArreglo(resp,'hermanos');
                  return this.sortJSON(data, 'fecha_orden', 'asc');

                }));
  }
  getEmanuel(){
    return this.firebaseDatabase.list<DataEmanuel>('emanuel').valueChanges();
  }
  getAvisos(){
    return this.firebaseDatabase.list<Avisos>('avisos',resp=>resp.orderByChild('activo').equalTo(1)).valueChanges();
  }
  getRecursos(categoria:string){
    return this.firebaseDatabase.list('recursos',resp=>resp.orderByChild('tipo').equalTo(categoria)).valueChanges();
  }
  getCalendarioDelMes(mes?:number,fecha:string=''){
    let _mes = new Date().getMonth()+1;
    if (mes) {
      _mes=mes;
    }
    return this.firebaseDatabase.list('calendario',resp=>resp.orderByChild('month').equalTo(_mes)).valueChanges();
    // return this.http.get<Calendario>(`${URL}/api/calendario/mes/${_mes}?_format=json&field_fecha_value=${fecha}&page=${pagina}`);
  }
  sortJSON(data:any, key:any, orden:any) {
    return data.sort(function (a:any, b:any) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
  }
  private crearArreglo(resp:object,tipo:string){
    if (tipo=='recursos') {
      if(resp === null ){return []; }
      const recursos:Recursos[] = [];
  
      Object.keys(resp).forEach(key =>{
        const recurso:Recursos = resp[key];
        recursos.push(recurso);
      });
  
      return recursos;
    }
    if (tipo=='hermanos') {
      if(resp === null ){return []; }
      const hermanos:Hermanos[] = [];
  
      Object.keys(resp).forEach(key =>{
        const hermano:Hermanos = resp[key];
        hermanos.push(hermano);
      });
  
      return hermanos;
    }
  }
}
