import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortfolioComponent } from './admin-portfolio.component';

describe('AdminPortfolioComponent', () => {
  let component: AdminPortfolioComponent;
  let fixture: ComponentFixture<AdminPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
