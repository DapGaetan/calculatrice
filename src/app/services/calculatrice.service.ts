import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatriceService {

  constructor() { }

  // Ajout d'une fonction vide pour pas planter le test
  calculer(a: number, b: number, operateur: string): number {
    return 0;
  }
}
