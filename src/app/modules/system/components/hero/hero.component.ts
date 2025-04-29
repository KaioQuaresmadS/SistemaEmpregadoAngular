import { Component, inject } from '@angular/core';

//Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass';
import { DialogCadastroComponent } from '../dialog-cadastro/dialog-cadastro.component';
import { DialogConsultaComponent } from '../dialog-consulta/dialog-consulta.component';

@Component({
  selector: 'app-hero',
  imports: [MatDialogModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  #dialog = inject(MatDialog)

  public openDialog(data: any) {

    this.#dialog.open(DialogCadastroComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  };

  
}
