import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatriceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculatrice';
}
