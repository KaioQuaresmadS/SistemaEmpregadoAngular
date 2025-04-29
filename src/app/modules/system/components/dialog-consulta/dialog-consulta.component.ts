import { Component, Inject, signal} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EmpregadorService } from '../../../../empregados.service';



@Component({
  selector: 'app-dialog-consulta',
  imports: [
    MatDialogModule,
  
  ],
  templateUrl: './dialog-consulta.component.html',
  styleUrl: './dialog-consulta.component.scss'
})
export class DialogConsultaComponent {

  empregador: any = {};

  constructor(
    private empregadorService: EmpregadorService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogConsultaComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.empregador = {...data};

  }

  public button = signal([
    {
      srcEditar: 'assets/img/lapis.svg',
      srcDeletar: 'assets/img/lixeira.svg',
    }
  ]);


}
