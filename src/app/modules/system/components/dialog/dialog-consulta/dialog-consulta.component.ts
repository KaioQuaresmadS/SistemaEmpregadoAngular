import { Component, Inject, signal} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { EmpregadorService } from '../../../../../empregados.service';



@Component({
  selector: 'app-dialog-consulta',
  imports: [
    MatDialogModule,
    MatTableModule
  ],
  templateUrl: './dialog-consulta.component.html',
  styleUrl: './dialog-consulta.component.scss'
})
export class DialogConsultaComponent {
  // Table de dados
displayedColumns: string[] = [
  'id',
  'firstName',
  'lastName',
  'email',
  'phone',
  'city',
  'address',
]

  empregador: any = {};

  constructor(
    private empregadorservice: EmpregadorService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogConsultaComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.empregador = {...data};

  }

  public button = signal([
    {
      srcEditar: 'assets/img/lapis.svg',
      altEditar: 'Botão para editar dados',

      srcDeletar: 'assets/img/lixeira.svg',
      altDeletar: 'Botão para deletar dados'
    }
  ]);


}
