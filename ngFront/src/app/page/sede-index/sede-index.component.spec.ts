import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeIndexComponent } from './sede-index.component';

describe('SedeIndexComponent', () => {
  let component: SedeIndexComponent;
  let fixture: ComponentFixture<SedeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
