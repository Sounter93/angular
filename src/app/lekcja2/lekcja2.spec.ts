import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja2 } from './lekcja2';

describe('Lekcja2', () => {
  let component: Lekcja2;
  let fixture: ComponentFixture<Lekcja2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja2],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
