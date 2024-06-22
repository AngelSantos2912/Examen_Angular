import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoExistenteComponent } from './pagina-no-existente.component';

describe('PaginaNoExistenteComponent', () => {
  let component: PaginaNoExistenteComponent;
  let fixture: ComponentFixture<PaginaNoExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaNoExistenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaNoExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
