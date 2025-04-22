import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public picture = signal([
    {
      src: 'assets/img/facebook.png',
      alt: 'Logo Facebook',
      title: 'Facebook'
    },

    {
      src: 'assets/img/instagram.png',
      alt: 'Logo Instagram',
      title: 'Istagram'
    },

    {
      src: 'assets/img/linkedin.png',
      alt: 'Logo LinkedIn',
      title: 'LinkedIn'
    },
  ]);

  public contactBox = signal([
    {
      src: 'assets/img/alfinete.png',
      alt: 'Ícone de localização da empresa',
      title: 'Localização'
    },

    {
      src: 'assets/img/telefone.png',
      alt: 'Ícone do Telefone da empresa',
      title: 'Telefone da empresa',
      credits: 'ícones criados por Creaticca Creative Agency - Flaticon'
    },

    {
      src: 'assets/img/email.png',
      alt: 'Ícone do Email da empresa',
      title: 'Email da empresa',
      credits: 'ícones criados por Uniconlabs - Flaticon'
    }
  ]);

  public getText(title: string): string {
    switch (title) {
      case 'Localização':
        return 'Ribeirão das Neves';

      case 'Telefone da empresa':
        return '(31) 94321-5678';

      case 'Email da empresa':
        return 'kaioquaresmadesouza1@gmail.com';

      default:
        return ''
    }
  }

}
