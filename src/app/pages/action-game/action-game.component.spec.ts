import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGameComponent } from './action-game.component';

describe('ActionGameComponent', () => {
  let component: ActionGameComponent;
  let fixture: ComponentFixture<ActionGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
