import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacaoComponent } from './observacao.component';

describe('ObservacaoComponent', () => {
  let component: ObservacaoComponent;
  let fixture: ComponentFixture<ObservacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
