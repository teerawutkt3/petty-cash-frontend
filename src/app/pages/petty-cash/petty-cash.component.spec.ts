import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashComponent } from './petty-cash.component';

describe('PettyCashComponent', () => {
  let component: PettyCashComponent;
  let fixture: ComponentFixture<PettyCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettyCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
