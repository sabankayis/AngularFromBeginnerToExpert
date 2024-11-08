import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SartComponent } from './sart.component';

describe('SartComponent', () => {
  let component: SartComponent;
  let fixture: ComponentFixture<SartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
