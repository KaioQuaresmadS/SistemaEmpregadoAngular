import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { EmpregadorService } from '../../../../../empregados.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, CommonModule],
  templateUrl: './dialog-cadastro.component.html',
  styleUrl: './dialog-cadastro.component.css'
})
export class DialogCadastroComponent {

  empregador = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
  };

  constructor(private empregadorService: EmpregadorService,
    private dialogRef: MatDialogRef<DialogCadastroComponent>) { }

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

