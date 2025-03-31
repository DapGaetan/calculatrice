import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatriceService {
  private history: string[] = [];

  constructor() {}

  calculer(a: number, b: number, operateur: string): number {
    let result: number;

    switch (operateur) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        if (b === 0) {
          result = NaN;
        } else {
          result = a / b;
        }
        break;
      default:
        throw new Error('Opérateur non supporté');
    }

    this.addToHistory(a, b, operateur, result);

    return result;
  }

  private addToHistory(a: number, b: number, operateur: string, result: number) {
    const operation = `${a} ${operateur} ${b} = ${result}`;
    this.history.push(operation);
  }

  getHistory(): string[] {
    return this.history;
  }

  clearHistory(): void {
    this.history = [];
  }
}
