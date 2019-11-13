import { Injectable } from '@angular/core';
import { cliente } from 'src/app/models/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServloginService {

  url : "http://localhost:3003/login";
  urlCliente : "http://localhost:3003/clientes";
  constructor(private http:HttpClient) { 
      

  }
//Este metodo sirve para hacer el post al login del servidor
  login(c:cliente): Observable<any> {
    let cliente = {"cliente" : c}
    return this.http.post<any>(this.url, cliente);    

  }

  get() : Observable<any>{
    return this.http.get<any>(this.urlCliente);
  }
}
