import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaObjetosComponent } from './practica-objetos.component';

describe('PracticaObjetosComponent', () => {
  let component: PracticaObjetosComponent;
  let fixture: ComponentFixture<PracticaObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticaObjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
