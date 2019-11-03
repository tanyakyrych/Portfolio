import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecentComponent } from './admin-recent.component';

describe('AdminRecentComponent', () => {
  let component: AdminRecentComponent;
  let fixture: ComponentFixture<AdminRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
