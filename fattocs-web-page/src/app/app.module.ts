import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToDoListService } from './services/to-do-list.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CardTarefaComponent } from './components/card-tarefa/card-tarefa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { FormIncluiTarefaComponent } from './components/form-inclui-tarefa/form-inclui-tarefa.component';


@NgModule({
  declarations: [
    AppComponent,
    CardTarefaComponent,
    ModalComponent,
    FormIncluiTarefaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ToDoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
