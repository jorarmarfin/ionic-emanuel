These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/


    <ion-item *ngFor="let item of calendario">
      <ion-avatar slot="start">
        <img [src]="item.tipo_evento|imgcalendario">
      </ion-avatar>
      <ion-label>
        <ion-title size="small"><strong>{{ item.titulo }}</strong></ion-title>
        <ion-title size="small">{{ item.fecha }}</ion-title>
        <ion-title size="small" color="danger">{{ item.resumen }}</ion-title>
      </ion-label>
    </ion-item>
