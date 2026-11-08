import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja1 } from './lekcja1';

describe('Lekcja1', () => {
  let component: Lekcja1;
  let fixture: ComponentFixture<Lekcja1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja1],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
