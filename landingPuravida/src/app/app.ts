import { Component, signal } from '@angular/core';
import { Heroillustratedcomponent } from './landing/heroillustrated/heroillustrated';
import { Footercomponent } from './landing/footer/footer';
import { NavigationComponent } from './landing/navigation/navigation';
import { RoleSelectionComponent } from './landing/roleselection/roleselection';
import { ServicesComponent } from './landing/service/service';
import { TeamComponent } from './landing/team/team';


@Component({
  selector: 'app-root',
  imports: [Heroillustratedcomponent, NavigationComponent, RoleSelectionComponent, ServicesComponent,TeamComponent,Footercomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landingPuravida');
}
