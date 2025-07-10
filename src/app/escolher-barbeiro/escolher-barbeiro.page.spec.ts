import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolherBarbeiroPage } from './escolher-barbeiro.page';

describe('EscolherBarbeiroPage', () => {
  let component: EscolherBarbeiroPage;
  let fixture: ComponentFixture<EscolherBarbeiroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherBarbeiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
