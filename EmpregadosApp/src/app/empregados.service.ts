import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empregado } from './Empregado';

//Configurar cabeçalho da requisição http que será enviado -> PUT, DELETE e POST (altera o BD)
const httpOptions = {
  headers: new HttpHeaders({
    //Tipos de dados que iremos enviar e receber
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmpregadosService {

  //URL da API
  url = 'https://localhost:7069/api/empregados';

  //HttpClient: Será através dele que faremos as requisições
  constructor(private http: HttpClient) {
   }

   //Criar métodos
   GetAll(): Observable<Empregado[]>{
     //Observable: conjunto de dados que fica emitindo notificações (de quando os dados mudam) para o Angular
     //Retorna uma lista de empregados
     //usaremos o http para utilizar a requisição
     return this.http.get<Empregado[]>(this.url);
   }

   GetId(id: number): Observable<Empregado>{
     //Obterá um único empregado, então não será retornado um array
      //configurar url, pois enviará um ID
      const apiUrl = `${this.url}/${id}`;
      return this.http.get<Empregado>(apiUrl);
   } 

   //Recebe um empregado
   //Não tem um formato definido ==> any
   SetEmpregado(empregado: Empregado): Observable<any>{
     //será enviado para o server um dado do tipo Empregado, URL, dados para o servidor (empregado), opções do cabeçalho da requisição http 
     return this.http.post<Empregado>(this.url, empregado, httpOptions);
   }

   AtualizarEmpregado(empregado: Empregado): Observable<any>{
     return this.http.put<Empregado>(this.url, empregado, httpOptions);
   }

   DeletarEmpregado(id: number): Observable<any>{
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<number>(apiUrl, httpOptions);
   }
}
