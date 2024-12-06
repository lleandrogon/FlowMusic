import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercussaoComponent } from './percussao.component';

describe('PercussaoComponent', () => {
  let component: PercussaoComponent;
  let fixture: ComponentFixture<PercussaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercussaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercussaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
