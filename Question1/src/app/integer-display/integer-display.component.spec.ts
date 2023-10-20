import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegerDisplayComponent } from './integer-display.component';

describe('IntegerDisplayComponent', () => {
  let component: IntegerDisplayComponent;
  let fixture: ComponentFixture<IntegerDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegerDisplayComponent]
    });
    fixture = TestBed.createComponent(IntegerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
