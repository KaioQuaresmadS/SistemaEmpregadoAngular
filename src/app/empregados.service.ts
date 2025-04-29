import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpregadorService {
  private apiUrl = 'https://generous-empathy-production.up.railway.app/api/empregados';
  constructor(private http: HttpClient) { }

  getEmpregador(filtros?: any){
    return this.http.get(this.apiUrl, {params: filtros });
  }

  postEmpregador(empregador: any) {
    return this.http.post(this.apiUrl, empregador)
  }
}
