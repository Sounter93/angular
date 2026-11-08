import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja4 } from './lekcja4';

describe('Lekcja4', () => {
  let component: Lekcja4;
  let fixture: ComponentFixture<Lekcja4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja4],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
