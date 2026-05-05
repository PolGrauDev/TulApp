import { Injectable, signal } from '@angular/core';
import { Irecado } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Recados {
  
  recados = signal<Irecado[]>([]);

  getRecados(): Irecado[] {
    const datos: Irecado[] = [
      { 
        id: 1,
        titulo: 'Instala el wasa', 
        solicitante: 'Ramón',
        descripcion: 'Necesito que me instalen el wasa',
        fecha: '23-02-2026',
      },
      { 
        id: 3,
        titulo: 'Bailoteo en la tarde', 
        solicitante: 'Ramón',
        descripcion: 'Necesito menear el esqueleto',
        fecha: '23-02-2026',
      }
    ];

    this.recados.set(datos);
    
    return datos;
  }
}

