import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmplificadoresComponent } from './amplificadores.component';

describe('AmplificadoresComponent', () => {
  let component: AmplificadoresComponent;
  let fixture: ComponentFixture<AmplificadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmplificadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmplificadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
