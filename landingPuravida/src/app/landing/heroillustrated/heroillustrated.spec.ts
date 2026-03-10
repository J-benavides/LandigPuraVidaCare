import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroillustratedcomponent } from './heroillustrated';

describe('Heroillustratedcomponent', () => {
  let component: Heroillustratedcomponent;
  let fixture: ComponentFixture<Heroillustratedcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heroillustratedcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Heroillustratedcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
