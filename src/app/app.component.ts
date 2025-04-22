import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'sistemaEmpregado';
}
