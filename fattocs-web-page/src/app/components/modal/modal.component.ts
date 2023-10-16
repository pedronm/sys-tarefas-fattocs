import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { IDados } from 'src/app/contracts/IDados';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {

  @Input()
  public isModalOpen = false

  @Output() confirmarEmitter : EventEmitter<boolean> = new EventEmitter(true)
  
  public novaTarefa!: IDados

  constructor(){}

  public fechar(): void{
    this.isModalOpen = false
  }
  
  public confirmar(): void{
    this.isModalOpen = false
    this.confirmarEmitter.emit(true)
  }
}
