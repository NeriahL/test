import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLenseComponent } from './single-lense.component';

describe('SingleLenseComponent', () => {
  let component: SingleLenseComponent;
  let fixture: ComponentFixture<SingleLenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
