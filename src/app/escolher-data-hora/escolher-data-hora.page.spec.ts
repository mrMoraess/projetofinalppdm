import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolherDataHoraPage } from './escolher-data-hora.page';

describe('EscolherDataHoraPage', () => {
  let component: EscolherDataHoraPage;
  let fixture: ComponentFixture<EscolherDataHoraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherDataHoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
