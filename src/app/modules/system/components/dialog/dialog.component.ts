import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { EmpregadorService } from '../../../../empregados.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  empregador = {
    firstName: '',
    lastName: '',
    email: '',
    contantNo: '',
    city: '',
    address: '',
  };

  constructor(private empregadorService: EmpregadorService,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  cadastrar() {
    console.log('Botão clicado!', this.empregador);

    this.empregadorService.postEmpregador(this.empregador).subscribe({
      next: (res) => {
        console.log('Empregador cadastrado com sucesso!', res);
        alert('Empregador cadastrado com sucesso!');

        this.dialogRef.close();
      },
      error: (err: any) => {
        console.error('Erro ao cadastro', err)
        alert('Erro ao cadastrar o empregado')
      }
    })
  }
}

