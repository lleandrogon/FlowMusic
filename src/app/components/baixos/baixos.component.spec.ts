import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixosComponent } from './baixos.component';

describe('BaixosComponent', () => {
  let component: BaixosComponent;
  let fixture: ComponentFixture<BaixosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaixosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaixosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
