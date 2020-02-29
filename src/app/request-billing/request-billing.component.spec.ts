import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBillingComponent } from './request-billing.component';

describe('RequestBillingComponent', () => {
  let component: RequestBillingComponent;
  let fixture: ComponentFixture<RequestBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
