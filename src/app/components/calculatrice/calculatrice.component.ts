import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatriceService } from '../../services/calculatrice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss'],
  providers: [CalculatriceService],
  imports: [FormsModule, CommonModule]
})
export class CalculatriceComponent {
  display = '';
  result = 0;
  operateur = '';
  nombre1 = '';
  nombre2 = '';
  historique: string[] = [];

  constructor(private calculatriceService: CalculatriceService) {}

  ajouterChiffre(chiffre: string) {
    if (chiffre === '-') {
      this.display = '-' + this.display;
    } else {
      this.display += chiffre;
    }
  }

  ajouterOperateur(operateur: string) {
    if (this.display !== '') {
      this.display += ` ${operateur} `;
    }
  }

  calculer() {
    const [n1, op, n2] = this.display.split(' ');
    this.nombre1 = n1;
    this.operateur = op;
    this.nombre2 = n2;

    this.result = this.calculatriceService.calculer(Number(this.nombre1), Number(this.nombre2), this.operateur);


    this.historique.unshift(`${this.display} = ${this.result}`);

    if (this.historique.length > 5) {
      this.historique.pop();
    }

    this.display = '';
  }

  clear() {
    this.nombre1 = '';
    this.nombre2 = '';
    this.result = 0;
    this.operateur = '+';
    this.display = '';
  }
}
