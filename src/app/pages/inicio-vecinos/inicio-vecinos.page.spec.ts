import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { InicioVecinosPage } from './inicio-vecinos.page';

describe('InicioVecinosPage', () => {
  let component: InicioVecinosPage;
  let fixture: ComponentFixture<InicioVecinosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        InicioVecinosPage,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioVecinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main button', () => {
    const el: HTMLElement = fixture.nativeElement;
    const btn = el.querySelector('.iv-btn-primary');
    expect(btn).toBeTruthy();
    expect(btn?.textContent).toContain('Nueva Solicitud');
  });

  it('should render telephone and voice note buttons', () => {
    const el: HTMLElement = fixture.nativeElement;
    const secondaryBtns = el.querySelectorAll('.iv-btn-secondary');
    expect(secondaryBtns.length).toBe(2);
  });
});