import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja9 } from './lekcja9';

describe('Lekcja9', () => {
  let component: Lekcja9;
  let fixture: ComponentFixture<Lekcja9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja9],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
