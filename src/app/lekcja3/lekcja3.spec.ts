import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja3 } from './lekcja3';

describe('Lekcja3', () => {
  let component: Lekcja3;
  let fixture: ComponentFixture<Lekcja3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja3],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
