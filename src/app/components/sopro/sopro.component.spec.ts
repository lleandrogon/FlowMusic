import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoproComponent } from './sopro.component';

describe('SoproComponent', () => {
  let component: SoproComponent;
  let fixture: ComponentFixture<SoproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
