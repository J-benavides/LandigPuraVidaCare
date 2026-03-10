import { Component } from '@angular/core';

// Componente standalone de navegación
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class NavigationComponent {

  // Links visibles en la navbar
  navLinks = ['Nosotros', 'Servicios', 'Roles', 'Equipo'];
  activeLink = 'Nosotros';

  // Mapeo link → id de sección en el DOM
  private sectionIds: Record<string, string> = {
    'Nosotros':  'hero',
    'Servicios': 'services',
    'Roles':     'role-selection',
    'Equipo':    'team'
  };

  // Activa el link y hace scroll suave a su sección
  setActive(link: string): void {
    this.activeLink = link;
    const id = this.sectionIds[link];
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}