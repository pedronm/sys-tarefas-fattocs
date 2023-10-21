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
  tarefaIdExcluir: number = 0

  public listaTarefas : IDados[] = new Array<IDados>()
  public tarefa: any = {
    terefaId: 0,
    nomeTarefa: '',
    dtLimite: '',
    custo : 0,
    ordem: 0
  }

  @ViewChild("modal")
  public modal!: ModalComponent

  @ViewChild("excluirModal")
  public excluirModal!: ModalComponent

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
    // Usado para mockar
    // if(this.listaTarefas.length <= 0 )
    //   this.listaTarefas =  Array.from(
    //   [
    //     {tarefaId: Math.random(), ordem: 0, nomeTarefa: 'Tarefa 1', custo: 1024, dtLimite: new Date('01/03/2024') },
    //     {tarefaId: Math.random(), ordem: 0,  nomeTarefa: 'Tarefa 1', custo: 1024, dtLimite: new Date('01/03/2024') },
    //     {tarefaId: Math.random(), ordem: 0,  nomeTarefa: 'Tarefa 1', custo: 1024, dtLimite: new Date('01/03/2024') }
    //   ])

  }

  incluirTarefa(novaTarefa: any): void{
    if( novaTarefa.tarefaId == null 
        || novaTarefa.tarefaId == undefined 
      || novaTarefa.tarefaId == 0)  
      this.service.adicionarTarefa(novaTarefa)
        .subscribe(
          {
            next: (e) => {
              this.listaTarefas.push(e)
              this.recuperarLista()
            },
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
                this.recuperarLista()
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
  
  excluirTarefa(): void{   
    this.service.removerTarefa(this.tarefaIdExcluir)
      .subscribe(
        {
          next: () => {          
            this.recuperarLista()
            this.excluirModal.isModalOpen = false
          },
          error: () => {
            this.excluirModal.isModalOpen = false
          },
          complete: () => {
            this.excluirModal.isModalOpen = false
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
  
  public abrirModalNovaTarefa(){
    this.tarefa = {
      terefaId: 0,
      nomeTarefa: '',
      dtLimite: '',
      custo : 0,
      ordem: 0
    }
    this.modal.isModalOpen = this.modal.isModalOpen ? false : true
  }

  public excluirTarefaAbrirModal(id: number){
    this.tarefaIdExcluir = id
    this.excluirModal.isModalOpen = true
  }

  public recuperarLabelBtnModal(): string {
    return this.tarefa.tarefaId !== 0 && this.tarefa.tarefaId !== undefined ? 'alterar' : 'adicionar'
  }
  

}
