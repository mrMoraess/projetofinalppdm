import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusHorariosPage } from './meus-horarios.page';

describe('MeusHorariosPage', () => {
  let component: MeusHorariosPage;
  let fixture: ComponentFixture<MeusHorariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
