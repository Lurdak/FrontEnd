import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HadasComponent } from './hadas.component';

describe('HadasComponent', () => {
  let component: HadasComponent;
  let fixture: ComponentFixture<HadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
