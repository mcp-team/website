import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadendViewComponent } from './deadend-view.component';

describe('DeadendViewComponent', () => {
  let component: DeadendViewComponent;
  let fixture: ComponentFixture<DeadendViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadendViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadendViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
