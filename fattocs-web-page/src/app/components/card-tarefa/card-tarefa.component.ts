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

  @Output() mudancaItemListaEmitter = new EventEmitter()
  @Output() editarItemEmitter = new EventEmitter()

  @Input() tarefaCard!: IDados

  @Input() btnSaveLabel = ''

  @Input() btnCancelLabel = ''

  public excluir(): void{
   this.mudancaItemListaEmitter.emit()
  }

  public editarItem() : void{
    this.editarItemEmitter.emit()
  }

}
