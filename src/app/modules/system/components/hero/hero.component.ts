import { Component, inject } from '@angular/core';

//Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-hero',
  imports: [MatDialogModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  #dialog = inject(MatDialog)

  public openDialog(data: any) {

    this.#dialog.open(DialogComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
