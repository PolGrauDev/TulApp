import { Component, OnInit } from '@angular/core';
import { RecadosComponent } from 'src/app/shared/recados/recados.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
  imports: [RecadosComponent, IonContent]
})
export class SolicitudesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
