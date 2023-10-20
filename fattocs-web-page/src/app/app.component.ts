import { Component, ViewChild } from '@angular/core';
import { ToDoListService } from './services/to-do-list.service';
import { IDados } from './contracts/IDados';
import { moveItemInArray} from '@angular/cdk/drag-drop';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public listaTarefas : IDados[] = new Array<IDados>()
  public tarefa: any = {
    nomeTarefa: '',
    dtLimite: '',
    custo : 0
  }

  @ViewChild("modal")
  public modal!: ModalComponent


  constructor(private service: ToDoListService){}

  ngOnInit(): void {
   this.recuperarLista()
  }
  
  public recuperarLista(): void{
    this.service.recuperarTarefas()
    .subscribe(
      {
        next:(tarefas: [] ) => {
          this.listaTarefas = tarefas
        }
      }
    ) 
    
    if(this.listaTarefas.length <= 0 )
            this.listaTarefas =  Array.from(
            [
              {tarefaId: Math.random(), ordem: 0, nomeTarefa: 'Tarefa 1', custo: 1024, dtLimite: new Date('01/03/2024') },
              {tarefaId: Math.random(), ordem: 0,  nomeTarefa: 'Tarefa 1', custo: 1024, dtLimite: new Date('01/03/2024') },
              {tarefaId: Math.random(), ordem: 0,  nomeTarefa: 'Tarefa 1', custo: 1024, dtLimite: new Date('01/03/2024') }
            ])

  }

  incluirTarefa(novaTarefa: any): void{      
    if(novaTarefa.tarefaId == null)  
      this.service.adicionarTarefa(novaTarefa)
        .subscribe(
          {
            next: (e) => this.listaTarefas.push(e),
            error: () => {
            },
            complete: () => {
              this.modal.fechar()
            }
          }
        )
      else
        this.service.atualizarTarefa(novaTarefa.tarefaId, this.tarefa)
          .subscribe(
            {
              next : (ret) => {
                let index = this.listaTarefas.findIndex( (tarefa) => {
                  return tarefa.tarefaId === novaTarefa.tarefaId
                })
                this.listaTarefas.splice(index,1)
                this.listaTarefas.push(novaTarefa)
                this.modal.fechar()
              },
              complete: () => {this.modal.fechar()}
            }
          )
  }

  editarTarefa(id: number): void{
    this.modal.isModalOpen = true
    this.tarefa = this.listaTarefas.find( (tarefa) => tarefa.tarefaId === id)
  }
  
  excluirTarefa(id: number): void{   
    this.service.removerTarefa(id)
      .subscribe(
        {
          next: () => {
            let itemIndex = this.listaTarefas.findIndex((el: any) => el.tarefaId = id)
            let meioInicialLista = this.listaTarefas.slice(0, itemIndex)
            let meioFinalLista = this.listaTarefas.slice(itemIndex, this.listaTarefas.length)    
            this.listaTarefas = meioInicialLista.concat(meioFinalLista)
          },
          error: () => {},
          complete: () => {

          }
        }
      )
  }

  dropped(event: any){    
    moveItemInArray(
      this.listaTarefas,
      event.previousIndex,
      event.currentIndex
    )
    
    this.listaTarefas.forEach(
      (item: any, index) => {
        item.ordem = index+1 
      }
    )
    
  }

  public cancelarFormulario(param: any){
    this.modal.fechar()
  }
  
  public abrirModal(){
    this.tarefa = {}
    this.modal.isModalOpen = this.modal.isModalOpen ? false : true
  }
}
