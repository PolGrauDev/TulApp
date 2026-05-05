import { Component, inject, OnInit } from '@angular/core';
import { Recados } from 'src/app/service/recados';
import { IonContent } from '@ionic/angular/standalone';
import { RecadoComponent } from '../recado/recado.component';

@Component({
  selector: 'app-recados',
  standalone: true,
  templateUrl: './recados.component.html',
  styleUrls: ['./recados.component.scss'],
  imports: [IonContent, RecadoComponent]
})
export class RecadosComponent  implements OnInit {

  constructor() { }

  recado = inject(Recados);

  ngOnInit() {
    this.recado.getRecados();
  }

}
