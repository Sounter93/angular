import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja5 } from './lekcja5';

describe('Lekcja5', () => {
  let component: Lekcja5;
  let fixture: ComponentFixture<Lekcja5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja5],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
