import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatriceService {

  calculer(a: number, b: number, operateur: string): number {
    switch (operateur) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : NaN;
      default:
        throw new Error('Opérateur non supporté');
    }
  }
}
