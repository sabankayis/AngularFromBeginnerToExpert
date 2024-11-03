import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteLettersComponent } from './write-letters.component';

describe('WriteLettersComponent', () => {
  let component: WriteLettersComponent;
  let fixture: ComponentFixture<WriteLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteLettersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
