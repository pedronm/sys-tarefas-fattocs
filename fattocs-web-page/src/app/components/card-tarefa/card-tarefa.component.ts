import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { IDados } from 'src/app/contracts/IDados';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.sass'],
  
})
export class CardTarefaComponent {

  constructor(private service: ToDoListService){}

  @Output() mudancaItemLista = new EventEmitter()

  @Input() tarefaCard!: IDados

  @Input() btnSaveLabel = ''

  @Input() btnCancelLabel = ''

  public isEditando = false

  public excluir(): void{
    this.service.removerTarefa(this.tarefaCard.tarefaId)
      .subscribe(
        {
          next: () => this.mudancaItemLista.emit(),
          error: () => {}
        }
      )
  }

  public salvarAlteracoes(tarefa: any): void {
    this.service.atualizarTarefa(this.tarefaCard.tarefaId, tarefa)
      .subscribe(
        {
          next: () => {
            this.isEditando = false
            this.mudancaItemLista.emit()
          },
          error: (err) => {console.log(err)}
        }
      )
  }

}
