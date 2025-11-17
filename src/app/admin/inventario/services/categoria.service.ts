import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = environment.urlServidor
  private http = inject(HttpClient)

  funListar(){
    return this.http.get(`${this.baseUrl}/categoria`)
  }
}