import { Component } from '@angular/core';

// Componente standalone del footer
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footercomponent {

  // Columnas tipo Tetris: altura (%) y gradiente verde por columna
  columns = [
    { height: 25, gradient: 'linear-gradient(to top, rgba(13,148,136,0.08), transparent, rgba(13,148,136,0.05))' },
    { height: 50, gradient: 'linear-gradient(to top, rgba(13,148,136,0.05), transparent, rgba(13,148,136,0.08))' },
    { height: 35, gradient: 'linear-gradient(to top, rgba(13,148,136,0.08), transparent, rgba(13,148,136,0.05))' },
    { height: 60, gradient: 'linear-gradient(to top, rgba(13,148,136,0.05), transparent, rgba(13,148,136,0.08))' },
    { height: 30, gradient: 'linear-gradient(to top, rgba(13,148,136,0.08), transparent, rgba(13,148,136,0.05))' },
    { height: 45, gradient: 'linear-gradient(to top, rgba(13,148,136,0.05), transparent, rgba(13,148,136,0.08))' },
    { height: 20, gradient: 'linear-gradient(to top, rgba(13,148,136,0.08), transparent, rgba(13,148,136,0.05))' },
    { height: 55, gradient: 'linear-gradient(to top, rgba(13,148,136,0.05), transparent, rgba(13,148,136,0.08))' },
  ];
}