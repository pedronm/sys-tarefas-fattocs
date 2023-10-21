import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ToDoListService {

  url: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  public recuperarTarefas(): Observable<any>{
    return this.http.get(`${this.url}/tarefa`)
  }

  public adicionarTarefa(tarefa: any): Observable<any>{
    return this.http.post(`${this.url}/tarefa`, tarefa)
  }

  public atualizarTarefa(id: number, tarefaNova: any): Observable<any>{
    return this.http.put(`${this.url}/tarefa/${id}`,  tarefaNova)
  }

  public removerTarefa(id: number): Observable<any>{
    return this.http.delete(`${this.url}/tarefa/${id}`)
  }

}
