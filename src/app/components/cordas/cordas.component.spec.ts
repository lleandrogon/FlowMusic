import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordasComponent } from './cordas.component';

describe('CordasComponent', () => {
  let component: CordasComponent;
  let fixture: ComponentFixture<CordasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CordasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CordasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
