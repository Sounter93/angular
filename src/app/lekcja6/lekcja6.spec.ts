import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja6 } from './lekcja6';

describe('Lekcja6', () => {
  let component: Lekcja6;
  let fixture: ComponentFixture<Lekcja6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja6],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
