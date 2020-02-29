import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGRComponent } from './request-gr.component';

describe('RequestGRComponent', () => {
  let component: RequestGRComponent;
  let fixture: ComponentFixture<RequestGRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestGRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
