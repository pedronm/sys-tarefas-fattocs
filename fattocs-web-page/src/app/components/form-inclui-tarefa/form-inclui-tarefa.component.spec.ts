import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIncluiTarefaComponent } from './form-inclui-tarefa.component';

describe('FormIncluiTarefaComponent', () => {
  let component: FormIncluiTarefaComponent;
  let fixture: ComponentFixture<FormIncluiTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIncluiTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIncluiTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
