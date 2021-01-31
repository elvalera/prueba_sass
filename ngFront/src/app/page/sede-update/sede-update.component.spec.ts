import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeUpdateComponent } from './sede-update.component';

describe('SedeUpdateComponent', () => {
  let component: SedeUpdateComponent;
  let fixture: ComponentFixture<SedeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
