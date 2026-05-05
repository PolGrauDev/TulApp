import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  imports: [IonContent]
})
export class PerfilComponent  implements OnInit {

  constructor() { }

  onSolicitud(){

  }
  
  ngOnInit() {}

}
