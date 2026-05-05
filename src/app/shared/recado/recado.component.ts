import { Component, Input, OnInit } from '@angular/core';
import { Irecado } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-recado',
  standalone: true,
  templateUrl: './recado.component.html',
  styleUrls: ['./recado.component.scss'],
})
export class RecadoComponent  implements OnInit {

  constructor() { }
  @Input() recadoRecibido!: Irecado;
  ngOnInit() {}

}
