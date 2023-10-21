import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-inclui-tarefa',
  templateUrl: './form-inclui-tarefa.component.html',
  styleUrls: ['./form-inclui-tarefa.component.sass']
})
export class FormIncluiTarefaComponent {
  @Output() tarefaFormEmitter = new EventEmitter<any>
  @Output() cancelarFormEmitter = new EventEmitter<any>

  @Input() public ordem = 0
  @Input() public tarefaId = 0
  @Input() public nomeTarefa: string = ''
  @Input() public dtLimite: Date = new Date()
  @Input() public custo : number = 0

  @Input() btnSaveLabel = ''
  @Input() btnCancelLabel= ''
  
  tarefaForm = this.fb.group({
    nomeTarefa: ['', Validators.required, ],
    dtLimite: [new Date(), Validators.required] ,
    custo: ['', Validators.required]
  })

  constructor(private fb: FormBuilder){}

  public enviar(): void{
    this.tarefaFormEmitter.emit(this.tarefaForm.valid ? 
      {
        tarefaId: this.tarefaId,
        nomeTarefa: this.nomeTarefa,
        dtLimite: this.dtLimite,
        custo: this.custo,
        ordem: this.ordem
      }
      : null)
  }

  public cancelar():void{
    this.cancelarFormEmitter.emit()
  }
}
