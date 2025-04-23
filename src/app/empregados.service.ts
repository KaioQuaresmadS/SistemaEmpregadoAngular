import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpregadorService {
  private apiUrl = 'https://generous-empathy-production.up.railway.app/api/empregados';
  constructor(private http: HttpClient) { }

  postEmpregador(empregador: any) {
    return this.http.post(this.apiUrl, empregador)
  }
}
