import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lekcja8 } from './lekcja8';

describe('Lekcja8', () => {
  let component: Lekcja8;
  let fixture: ComponentFixture<Lekcja8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lekcja8],
    }).compileComponents();

    fixture = TestBed.createComponent(Lekcja8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
