import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeCreateComponent } from './sede-create.component';

describe('SedeCreateComponent', () => {
  let component: SedeCreateComponent;
  let fixture: ComponentFixture<SedeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
