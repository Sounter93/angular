import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja7 } from './lekcja7';

describe('Lekcja7', () => {
  let component: Lekcja7;
  let fixture: ComponentFixture<Lekcja7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja7],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
