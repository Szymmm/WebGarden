import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrzadkaComponent } from './grzadka.component';

describe('GrzadkaComponent', () => {
  let component: GrzadkaComponent;
  let fixture: ComponentFixture<GrzadkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrzadkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrzadkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
