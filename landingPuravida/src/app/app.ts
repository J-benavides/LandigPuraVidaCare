import { Component, signal } from '@angular/core';
import { Heroillustratedcomponent } from './landing/heroillustrated/heroillustrated';
import { Footercomponent } from './landing/footer/footer';


@Component({
  selector: 'app-root',
  imports: [Heroillustratedcomponent, Footercomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landingPuravida');
}
