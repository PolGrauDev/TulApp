import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { CategoriaVecinosPage } from './categoria-vecinos.page';

describe('CategoriaVecinosPage', () => {
  let component: CategoriaVecinosPage;
  let fixture: ComponentFixture<CategoriaVecinosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        CategoriaVecinosPage,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaVecinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 6 category cards', () => {
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('.cv-card');
    expect(cards.length).toBe(6);
  });

  it('should render the phone button', () => {
    const el: HTMLElement = fixture.nativeElement;
    const tel = el.querySelector('app-btn-telefono');
    expect(tel).toBeTruthy();
  });
});